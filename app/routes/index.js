// routes/index.js
const presentationRoutes = require('./presentation-routes');
module.exports = function(app, db) {
  presentationRoutes(app, db);
  // Other route groups could go here, in the future
};