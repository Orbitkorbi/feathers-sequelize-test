
const { Formular } = require('./formular.class');
const createModel = require('../../models/formular.model');
const hooks = require('./formular.hooks');


module.exports = function (app) {
  const optionsFormular = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  const formularModel = new Formular(optionsFormular, app);

  app.use('/formular', formularModel);
  const service = app.service('formular');
  service.hooks(hooks);
};
