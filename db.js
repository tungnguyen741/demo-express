//use Low DB to save Data 
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

db = low(adapter)

// Set some defaults
db.defaults({
    data: []
}).write();

module.exports = db;