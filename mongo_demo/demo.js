
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://demo:demo@cluster0.2nxem.mongodb.net/session5?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db('session5').collection("boardgames");
  // perform actions on the collection object
  client.close();
});
