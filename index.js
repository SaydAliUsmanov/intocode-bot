require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use(require('./routes'));

const connectAndStartServer = () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Успешно подключено к порту ${process.env.PORT}!`);
    });
  } catch (e) {
    console.log('Ошибка');
  }
};

connectAndStartServer();
