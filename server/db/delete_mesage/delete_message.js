let message = require('../message')
// let articleInfo = require('../articleInfo')


message.deleteMany({}).then((data) => {
    console.log(data);
});