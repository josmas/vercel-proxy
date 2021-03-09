const fetch = require('node-fetch');

module.exports = (req, res) => {
  // TODO add checks for body.url
  let url = 'https://api.github.com/users/github'
  if (req.body.url) {
    url = req.body.url
  }
  fetch(url)
    .then(result => result.json())
    .then(json => res.send(json))
    .catch(e => res.send(e))
}
