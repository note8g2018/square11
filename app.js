if(process.env.NODE_ENV !== 'production')
{
  require('dotenv').config({path: '.env'});
}

const express = require('express');
const userNameRouter = require('./route/userName_R');
const emailRouter = require('./route/email_R');
const regRouter = require('./route/reg_R');
const loginRouter = require('./route/login_R');
const logoutRouter = require('./route/logout_R');
const articleRouter = require('./route/article_R');
const db = require('./db/db_DB');
const bodyParser = require('body-parser');
const sessions = require('express-session');

let session;

const app = express();

const HTTP_PORT = 3000;
//const HTTP_IP = '192.168.1.100';
//192.168.43.1
const HTTP_IP = '192.168.43.6';
//const HTTP_IP = 'coolme.me';

async function start()
{
  console.log('Step 2');
  await db.run();
  app.listen(process.env.PORT || HTTP_PORT, HTTP_IP);
  console.log(`The HTTP1.1 WebServer is listening on: 
  ${HTTP_IP}:${HTTP_PORT}`);
}
console.log('Step 1');
start();

// app.use((req, res, next) =>
// {
//   console.log('request was made:');
//   console.log('baseUrl: ', req.baseUrl);
//   console.log('remoteAddress: ', req.connection.remoteAddress);
//   console.log('hostname: ', req.hostname);
//   console.log('ip: ', req.ip);
//   console.log('originalUrl: ', req.originalUrl);
//   console.log('params: ', req.params);
//   console.log('path: ', req.path);
//   console.log('protocol: ', req.protocol);
//   console.log('secure: ', req.secure);
//   next();
// });

app.use(express.json());
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}));
app.use(sessions({
  secret: 'gyigivurvygytivfutvyi@@@@@@@^80528549812fjvnvbregh',
  resave: false,
  saveUninitialized: true
}));

app.use('/checkusername', userNameRouter);
app.use('/checkemail', emailRouter);
app.use('/reg', regRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/article', articleRouter);

module.exports = session;
