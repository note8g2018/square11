const MongoClient = require("mongodb").MongoClient;
const config = require('./config.json');

const uri = config.uri;
const URL = process.env.DATABASE_URL;

let client = new MongoClient(URL || uri,
  { 'useUnifiedTopology': true, 'keepAlive': true });

async function run()
{
  try
  {
    await client.connect();
    console.log("Connected successfully to MongoDB");
  }
  catch (err) 
  {
    console.log(err);
  }
}

module.exports = {
  client,
  run,
};
