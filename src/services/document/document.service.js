// Initializes the `document` service on path `/document`
const { Document } = require('./document.class');
const createModelDocument = require('../../models/document.model');
const hooks = require('./document.hooks');

module.exports = function (app) {
  
  const documentOptions = {
    Model: createModelDocument(app),
    paginate: app.get('paginate')
  };

  const documentModel = new Document(documentOptions, app);

  app.use('/document', documentModel );

  // Get our initialized service so that we can register hooks
  const service = app.service('document');

  service.hooks(hooks);
};
