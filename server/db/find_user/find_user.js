// let register = require('../register')
let user = require('../user')
let skip = 0
let limit = 5
user.find({}).then((data) => {
    console.log(data);
});

// articleInfo.find({}).then((data) => {
//     console.log(data);
// });