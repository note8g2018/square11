const DB = require('./db_DB');

async function email(email)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const personCollection = db.collection('person');
    const doc = await personCollection.findOne({ 'email': email });
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

exports.email = email;