const defaultRoute = require('./controllers/default');

module.exports = (appInstance) => {
    appInstance.use('/', defaultRoute);
}