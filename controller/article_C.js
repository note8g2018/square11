const Article = require('../db/article_DB');
const LogIn = require('../db/login_DB');

const write = async (req, res)=>
{
  const data = req.body;
  const title = data["title"];
  const body = data["body"];
  const author = data["author"];
  const writingTimeUTC = data["writingTimeUTC"];
  const isPublic = data["isPublic"];
  const result = Article.save(title, body, author, writingTimeUTC, isPublic);
  res.send(result);
}

const all = async (req, res)=>
{
  const data = req.body;
  const userName = data["userName"];
  const passWord = data["passWord"];
  const limitNumber = data["limitNumber"];
  const time = data["time"];
  const isLogin = await LogIn.checkLogin(userName, passWord);
  if(isLogin)
  {
    Article.read(res, limitNumber, time);
  }
}

module.exports = {
  write,
  all,
}