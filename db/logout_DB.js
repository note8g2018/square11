const DB = require('./db_DB');

async function logout(userName, passWord, ip)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const personCollection = db.collection('person');
    const filter = {
      'userName': userName,
      'passWord': passWord,
    }
    const update = {
      'ip': ip,
      'lastTimeLoginUTC': new Date().toISOString(),
      'isLogin': false,
    }
    const options = {
      'upsert': false,
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

module.exports = {
  logout,
}