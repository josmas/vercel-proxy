const fetch = require('node-fetch');

module.exports = (req, res) => {
  // TODO add checks for body.url
  fetch(req.body.url)
    .then(res => res.json())
    .then(json => res.json(json))
    .catch(e => res.send(e))
}
