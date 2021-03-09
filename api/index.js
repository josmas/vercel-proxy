const fetch = require('node-fetch');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
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
