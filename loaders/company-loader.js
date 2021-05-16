module.exports = function (source) {
  const options = this.getOptions()
  this.callback(null, addSign(source, options.sign))
  return
}

function addSign(content, sign) {
  return `/** ${sign} */\n${content}`
}
