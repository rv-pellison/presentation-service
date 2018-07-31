// note_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = (app, db) => {

    app.get('/pics/:id', (req, res)=>{
        const id = req.params.id;
        const details = { '_id': new ObjectID(id)};

        db.collection('pictures').findOne(details, (err, item) => {
            if(err){
                res.send({'error': 'An error has occurred'});
            }
            else{
                res.send(item);
            }
        })
    });

    app.put('/pics/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const pic = { img_url: req.body.url, title: req.body.title };
        db.collection('notes').update(details, pic, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(pic);
          } 
        });
      });

    app.delete('/pics/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('pictures').remove(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send('Note ' + id + ' deleted!');
          } 
        });
      });




    app.post('/pics', (req, res) => {
      const pic = { img_url: req.body.url, title: req.body.title };
      db.collection('pictures').insert(pic, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  };