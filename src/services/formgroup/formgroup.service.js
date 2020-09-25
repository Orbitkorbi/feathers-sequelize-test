const { Formgroup } = require('./formgroup.class');
const createModel = require('../../models/formgroup.model');
const hooks = require('./formgroup.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app)
  };

  //service not needed, do all in Formular service
  app.use('/formgroup', new Formgroup(options, app));
  
  const service = app.service('formgroup');
  service.hooks(hooks);
};
