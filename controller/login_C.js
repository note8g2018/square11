const logIn = require('../db/login_DB');

const login = async (req, res)=>
{
  const data = req.body;
  const userName = data["userName"];
  //const email = data["email"];
  const passWord = data["passWord"];
  const ip = req.ip;
  const person = await logIn.login(userName, passWord, ip);
  res.send(person);
}

module.exports = {
  login,
}