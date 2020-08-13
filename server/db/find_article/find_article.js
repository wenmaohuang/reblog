let article = require('../article')
let articleInfo = require('../articleInfo')
let skip = 0
let limit = 5
article.find({}, {__v:0}, {skip, limit}).then((data) => {
    console.log(data);
});

// articleInfo.find({}).then((data) => {
//     console.log(data);
// });