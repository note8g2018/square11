const validate = require('../action/validate_A');
const check = require('../db/userName_DB');

const userName = async (req, res)=>
{
  const data = req.body;
  const userName = data["userName"];
  const isValid = validate.validUsername(userName);
  if (!isValid)
  {
    res.send({
      "result": false,
      "description": "The UserName is not Valid",
    });
  }
  else
  {
    const isTaken = await check.checkUserName(userName);
    if (isTaken)
    {
      res.send({
        "result": false,
        "description": "This UserName is Taken",
      });
    }
    else
    {
      res.send({
        "result": true,
        "description": null,
      });
    }
  }
}

module.exports = {
  userName,
}