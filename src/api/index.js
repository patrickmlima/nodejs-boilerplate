const defaultRouter = require('./controllers/default');
const apiDocsRouter = require('./controllers/apiDocs');

module.exports = (appInstance) => {
    appInstance.use('/', defaultRouter);
    appInstance.use('/api-docs', apiDocsRouter);
}
