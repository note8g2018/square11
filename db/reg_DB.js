const DB = require('./db_DB');

async function regCheck(userName, email)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const personCollection = db.collection('person');
    const doc = await personCollection
    .findOne({'userName': userName, 'email': email });
    console.log(doc);
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

async function regSave(userName, email, passWord, ip)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const personCollection = db.collection('person');    
    const result = await personCollection.insertOne({
      'userName': userName,
      'email': email,
      'passWord': passWord,
      'ip': ip,
      'isLogin': false,
      'regTimeUTC': new Date().toISOString(),
      'lastTimeLoginUTC': new Date().toISOString(),
    });
    if (result.insertedCount === 1)
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

module.exports = {
  regCheck,
  regSave,
}