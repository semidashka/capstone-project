import { useState, useEffect } from 'react';
import { Card } from './styled';

export default function WordList({ kind }) {
  const [words, setWords] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/words-db', {
          method: 'GET',
        });
        const data = await response.json();
        setWords(data);
      } catch (err) {
        console.error(`Error: ${err}`);
      }
    })();
  }, []);

  return (
    <Card>
      {words.map(word => (
        <div key={word.id}>
          {word.headword}
          {/* <ul>
              {word.chosenTranslations.map(translation => (
                <li>{translation}</li>
              ))}
            </ul> */}
        </div>
      ))}
    </Card>
  );
}
