
if (process.env.NODE_ENV === 'production')
    module.exports = require('./key_prod');
else
    module.exports = require('./key_dev');

//"mongodb://127.0.0.1:27017/task-manager"