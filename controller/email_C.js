const validator = require("email-validator");
const check = require('../db/email_DB');

const email = async (req, res)=>
{
  const data = req.body;
  const email = data["email"];
  const isValid = validator.validate(email);
  if (!isValid)
  {
    res.send({
      "result": false,
      "description": "The Email is not Valid",
    });
  }
  else
  {
    const isTaken = await check.email(email);
    if (isTaken)
    {
      res.send({
        "result": false,
        "description": "This Email is Taken",
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
  email,
}