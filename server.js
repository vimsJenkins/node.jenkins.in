const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
  response.json({date: new Date().toDateString()});
})

app.get('/about', (request, response) => {
  response.send({
    from: request.hostname,
    time: new Date().toTimeString()
  })
});

app.listen(port, () => console.log(`Listening on port ${port}`));