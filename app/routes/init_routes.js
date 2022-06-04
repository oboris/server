module.exports = function(app, db) {
  app.get('/inits/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': db.ObjectId(id) };
    db.collection('init').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        console.log(item);
        res.send(item);
      } 
    });
  });

	app.post('/inits', (req, res) => {
    const item = { name: req.body.name, title: req.body.title };
    db.collection('init').insertOne(item, (err, result) => {
      if (err) {
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result);
        console.log(result);
        console.log(init);
      }
    });
  });
};