const fetch = require('node-fetch');

module.exports = (req, res) => {
  // TODO add checks for body.url
  fetch(req.body.url)
    .then(result => result.json())
    .then(json => res.send(json))
    .catch(e => res.send(e))
}
