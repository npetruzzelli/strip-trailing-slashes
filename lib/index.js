function stripTrailingSlashes(text) {
  var newText
  if (typeof text !== 'string') {
    throw new TypeError(
      'strip-trailing-slashes: provided text must be a string.'
    )
  }
  newText = text
  while (newText.endsWith('/') || newText.endsWith('\\')) {
    newText = newText.slice(0, -1)
  }
  return newText
}

module.exports = stripTrailingSlashes
