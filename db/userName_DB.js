const DB = require('./db_DB');

async function checkUserName(userName)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const personCollection = db.collection('person');
    const doc = await personCollection.findOne({ 'userName': userName });
    if (doc !== null)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
  catch(err)
  {
    console.log(err);
  }
}

exports.checkUserName = checkUserName;