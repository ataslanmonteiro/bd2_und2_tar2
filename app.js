const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
});