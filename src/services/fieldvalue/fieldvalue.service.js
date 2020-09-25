
const { Fieldvalue } = require('./fieldvalue.class');
const createModel = require('../../models/fieldvalue.model');
const hooks = require('./fieldvalue.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/fieldvalue', new Fieldvalue(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fieldvalue');

  service.hooks(hooks);
};
