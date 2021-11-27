const logOut = require('../db/logout_DB');

const logout = async (req, res)=>
{
  const data = req.body;
  const userName = data["userName"];
  const email = data["email"];
  const passWord = data["passWord"];
  const ip = req.ip;
  const person = await logOut.logout(userName, passWord, ip);
  res.send(person);
}

module.exports = {
  logout,
}