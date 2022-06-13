require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(require('./routes'));

const connectAndStartServer = () => {
  try {
    app.listen(4000, () => {
      console.log('Успешно подключено к порту 4000!');
    });
  } catch (e) {
    console.log('Ошибка');
  }
};

connectAndStartServer();

