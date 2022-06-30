const express = require('express');
const cors = require('cors');
const user = require('./routes/user');
const app = express();

app.use(express.json());

const corsOptions = { origin: 'http://localhost:3000' };
app.use(cors(corsOptions)); // enable CORS

const myLogger = (req, res, next) => {
  const log = {
    date: new Date(),
    url: req.url
  };
  console.log(JSON.stringify(log, null, 2));
  next();
};
app.use(myLogger);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to My Auth application.' });
});

app.use('/user', user);

const PORT = process.env.PORT || 4000;
const url = `http://localhost:${PORT}/`;
app.listen(PORT, () => console.log(`Listening on port ${url}`));
