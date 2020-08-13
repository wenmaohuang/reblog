// const mongoose = require("./connect")
// const dailyDB = require('./daily')
const mongoose = require("./connection/connection")

let Schema = mongoose.Schema;
let dailySchema = new Schema({
  content : {type: String,required: true},
})
let daily = mongoose.model("daily",dailySchema);

module.exports = daily
