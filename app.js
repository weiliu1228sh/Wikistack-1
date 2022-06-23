const express = require('express');
const morgan = require('morgan');
const main = require('./views/main');
const { db, Page, User } = require('./models');

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/users');

app.use('/wiki', wikiRouter);
//app.use('/users', userRouter);




app.get('/', (req,res)=> {
    res.send(main(''));
})

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

  PORT = '3000';

  const init = async() => {
    await db.sync();
      //only process below if we made changes in our database 
      //await db.sync({force: true});
      app.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}!`);
      });
  }

init();