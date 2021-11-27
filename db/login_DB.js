const DB = require('./db_DB');

async function login(userName, passWord, ip)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const personCollection = db.collection('person');
    const doc = await personCollection
    .findOne({'userName': userName, 'passWord': passWord });
    console.log(doc);
    if(doc === null)
    {
      return {'isLogin': false};
    }

    const filter = {
      'userName': userName,
      'passWord': passWord,
    }
    const update = {
      'ip': ip,
      'lastTimeLoginUTC': new Date().toISOString(),
      'isLogin': true,
    }
    const options = {
      'upsert': true,
      'returnOriginal': false,
    }
    const result = await personCollection
    .findOneAndUpdate(filter, {$set: update}, options);
    const person = result.value;
    console.log(person);
    if(result.ok === 1)
    {
      return person;
    }
  }
  catch(err)
  {
    console.log(err);
  }
}

async function checkLogin(userName, passWord)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const personCollection = db.collection('person');
    const doc = await personCollection
    .findOne({'userName': userName, 'passWord': passWord, 'isLogin': true });
    if(doc === null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  catch(err)
  {
    console.log(err);
  }
}

module.exports = {
  login,
  checkLogin,
}