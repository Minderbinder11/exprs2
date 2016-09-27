var mongodb = require('mongodb');

exports.showList = function(req, res, page) {

  var MongoClient = mongodb.MongoClient;
  var url         = 'mongodb://localhost:27017/kites';

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log(new Date() + ' : unable to connect to dB at ' + url + err);
    } else {
      console.log(new Date() + ' : connection established with ' + url);

      var collection = db.collection('kites');
      collection.find(page).toArray(function (e, docs) { //db call for userCollections
     //   console.log('inside the find call', docs);

        res.render('kites', {'kitelist': docs}); // render handlebars page passing in the database
      });
      db.close();
    }
  });

};