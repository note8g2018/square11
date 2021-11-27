const validate = require('../action/validate_A');
const check = require('../db/reg_DB');

const reg = async (req, res)=>
{
  const data = req.body;
  const userName = data["userName"];
  const email = data["email"];
  const passWord = data["passWord"];
  const ip = req.ip;
  const isValid = validate.validAll(userName, email, passWord);
  if (!isValid)
  {
    res.send({
      "result": false,
      "description": "The Data is not Valid",
    });
  }
  else
  {
    const isTaken = await check.regCheck(userName, email);
    if (isTaken)
    {
      res.send({
        "result": false,
        "description": "The UserName or Email or Both are Taken",
      });
    }
    else
    {
      const result = await check.regSave(
        userName,
        email,
        passWord,
        ip,
      );
      res.send({
        "result": result,
        "description": null,
      });
    }
  }
}

module.exports = {
  reg,
}