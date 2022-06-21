import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const newWordsCollection = db.collection('new-words');

  switch (req.method) {
    case 'POST':
      try {
        const result = await newWordsCollection.insertOne(req.body);
        client.close();

        res.status(201).json({ message: 'Word inserted!' });
      } catch (err) {
        console.error(err);
      }
      break;

    case 'GET':
      try {
        const newWords = await newWordsCollection.find().toArray();
        client.close();

        res.status(200).json(newWords);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
}
