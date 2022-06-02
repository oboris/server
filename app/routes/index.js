const initRoutes = require('./init_routes');
module.exports = function(app, db) {
  initRoutes(app, db);
  
};