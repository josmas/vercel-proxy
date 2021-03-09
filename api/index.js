const fetch = require('node-fetch');

module.exports = async (req, res) => {
  // TODO add checks for body.url
  const result = await fetch(req.body.url).catch(e => res.send(e))
  console.log('The result is ', result)
  res.json({
    result
  })
}
