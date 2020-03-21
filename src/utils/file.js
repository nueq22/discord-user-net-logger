const fs = require('fs')

function appendToFile (filename, data) {
  fs.appendFile(filename, data, function (err) {
    if (err) {
      console.error(err)
    }
  })
}

module.exports = {
  appendToFile
}
