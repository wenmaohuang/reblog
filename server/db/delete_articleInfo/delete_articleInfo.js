let article = require('../article')
let articleInfo = require('../articleInfo')


articleInfo.deleteMany({}).then((data) => {
    console.log(data);
});