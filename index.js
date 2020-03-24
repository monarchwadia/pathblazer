const express = require('express');
const urlGenerator = require('./utils/urlGenerator');
const viewGenerator = require('./utils/viewGenerator');

const PORT = process.env.PORT || 3000;

const app = express();

// ?ownerId=mintbean.io
app.get('/test', (req, res, next) => {
  const { ownerId } = req.query;
  const opts = { url: urlGenerator({ ownerId }) }
  const template = viewGenerator('test', opts);
  res.send(template);
})

// ?ownerId=mintbean.io
app.get('/iframe', (req, res, next) => {
  const ownerId = req.params.ownerId;
  const opts={ message: 'hello, world!', ownerId };
  const template = viewGenerator('iframe', opts);
  res.send(template);
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err);
})


const listener = app.listen(PORT, () => {
  console.log('Listening on port ' + listener.address().port)
});