module.exports = function(app, db) {
	app.post('/inits', (req, res) => {
    
    res.send('Hello')
  });
};