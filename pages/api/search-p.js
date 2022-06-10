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
  return data;
}

export default async function handler(req, res) {
  console.log(req.query);
  const q = req.query.q;
  const response = await fetchTranslationPons(q);

  return res.status(200).json(response);
}
