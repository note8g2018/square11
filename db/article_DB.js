const DB = require('./db_DB');
//const { Readable } = require('stream');

// const inStream = new Readable({
//   read() {}
// });

async function save(title, body, author, writingTimeUTC, isPublic)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const personCollection = db.collection('person');
    const doc = await personCollection
    .findOne({'userName': author, 'isLogin': true });
    if (doc === null)
    {
      return false;
    }
    const articleCollection = db.collection('articles');
    const result = await articleCollection.insertOne({
      'title': title,
      'body': body,
      'author': author,
      'isPublic': isPublic,
      'writingTimeUTC': new Date().toISOString(),
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

async function read(res, limitNumber, time)
{
  try
  {
    const dbName = 'flutter';
    const db = DB.client.db(dbName);
    const articleCollection = db.collection('articles');
    let articlesCurser = articleCollection.find({"writingTimeUTC":{$lt:time}})
    .sort({writingTimeUTC : -1}).limit(limitNumber);
    // articlesCurser
    // .stream().map((e)=>JSON.stringify(e)).pipe(res);  
    const list = await articlesCurser.toArray();
    //console.log(list);
    const listJson = JSON.stringify(list);
    //console.log(listJson);
    res.send(listJson); 
  }
  catch(err)
  {
    console.log(err);
  }
}

module.exports = {
  save,
  read,
}