
const { Field } = require('./field.class');
const createModel = require('../../models/field.model');
const hooks = require('./field.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app)
  };

  // service not needed, do all in Formular service
  app.use('/field', new Field(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('field');

  service.hooks(hooks);
};
