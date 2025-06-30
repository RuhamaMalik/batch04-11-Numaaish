const fs = require('fs')

const createLogs = (filename) => {
  return (req, res, next) => {
    fs.appendFile(filename, `\n bangai file ${req.url}\n`, (err, data) => {
      next();
    });
  }
}

module.exports = {
  createLogs
}