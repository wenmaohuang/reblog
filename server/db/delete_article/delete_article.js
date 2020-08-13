let article = require('../article')
// let articleInfo = require('../articleInfo')


article.deleteMany({}).then((data) => {
    console.log(data);
});