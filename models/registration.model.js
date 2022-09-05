const { db, DataTypes } = require("../utils/database.util");

// ! Define Registrations Model
const Registration = db.define("registration", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING, // Status: working, cancelled, out
    allowNull: false,
    defaultValue: "working",
  },
});

module.exports = { Registration };
