const validator = require("email-validator");

function validUsername(username = '') 
{
  //if (typeof username !== 'string') return false;
  const pattern = /^([a-z]{3})([a-z0-9]{5,28}$)/;
  const regex = new RegExp(pattern);
  return regex.test(username);
}

function validPassWord(passWord = '') 
{
  //if (typeof username !== 'string') return false;
  const pattern = /^([a-zA-Z0-9!@#$%^&*()_+=-]{8,31}$)/;
  const regex = new RegExp(pattern);
  return regex.test(passWord);
}

function validAll(userName, email, passWord) 
{
  const isUserName = validUsername(userName);
  const isEmail =  validator.validate(email);
  const isPassWord = validPassWord(passWord);
  return isUserName && isEmail && isPassWord;
}


module.exports = {
  validUsername,
  validAll,
}