let article = require('../article')
article.updateMany({_id :"5e8328222e0b8f2cf05e67d2"},{pv:130}).then((data) => {
    console.log(data);
});