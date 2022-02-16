const {readFileSync, read, readFile} = require('fs')
var loadjson = ()=>JSON.parse(readFileSync('flight.json'))
var data = readFileSync('flight.json')
console.log(JSON.parse(data)['roaster'][0])
module.exports = {loadjson};