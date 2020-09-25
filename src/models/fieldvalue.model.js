const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const fieldvalue = sequelizeClient.define('fieldvalue', {
    value: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    name: {
      plural: 'fieldvalues'
    }
  },
  {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  fieldvalue.associate = function (models) {
    fieldvalue.belongsTo( models['field'] );
    fieldvalue.belongsTo( models['document'] );
  };

  return fieldvalue;
};
