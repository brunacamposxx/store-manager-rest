const express = require('express');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/productsRoutes');
const salesRoutes = require('./routes/salesRoutes');

const app = express();
app.use(bodyParser.json());

const PORT = 3000;

// ------------------------------- //
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});
// ------------------------------- //

app.use(productsRouter);
app.use(salesRoutes);

app.listen(PORT, () => {
  console.log('Listening on port', PORT);
});
