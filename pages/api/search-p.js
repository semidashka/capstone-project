import * as cheerio from 'cheerio';

async function fetchTranslationPons(q) {
  const response = await fetch(
    `https://api.pons.com/v1/dictionary?q=${q}&l=deru`,

    {
      method: 'GET',
      headers: {
        'X-Secret': process.env.PONS_SECRET,
      },
    }
  );

  const data = await response.json();
  console.log(data);
  const hits = data[0].hits.map(hit => {
    return {
      ...hit,
      roms: hit.roms.map(rom => {
        const $ = cheerio.load(`<div>${rom.headword_full}</div>`);
        const genus = $('.genus');
        const genusText = genus.text();

        if (genusText === 'f') {
          genus.text('feminine');
        } else if (genusText === 'm') {
          genus.text('masculine');
        } else {
          genus.text('neutral');
        }
        const wordclass = $('.wordclass acronym').text();
        if (wordclass === 'N') {
          $('.wordclass acronym').text('noun');
        }
        return {
          ...rom,
          headword_full: $.html(),
          parsed: { genus: genusText, wordclass: wordclass },
        };
      }),
    };
  });
  data[0].hits = hits;
  return data;
}

export default async function handler(req, res) {
  const q = req.query.q;
  const response = await fetchTranslationPons(q);

  return res.status(200).json(response);
}
