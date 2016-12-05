var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var eventsData = [ {
    name: 'Winter Event',
    description: 'This is a winter event',
    time: '10:00am',
    duration: '1 hour',
    location: {
        streetAddr: '247 South State St.',
        city:'Chicago',
        state: 'IL.',
        zip: '60610',
        lon: '0',
        lat: '20'
    },
    capacity: 100
},
{
 name: 'Fall Event',
    description: 'This is a fall event',
    time: '10:00am',
    duration: '1 hour',
    location: {
        streetAddr: '247 South State St.',
        city:'Chicago',
        state: 'IL.',
        zip: '60610',
        lon: '0',
        lat: '20'
    },
    capacity: 100
},
{
 name: 'Summer Event',
    description: 'This is a summer event',
    time: '10:00am',
    duration: '1 hour',
    location: {
        streetAddr: '247 South State St.',
        city:'Chicago',
        state: 'IL.',
        zip: '60610',
        lon: '0',
        lat: '20'
    },
    capacity: 100
}
        
];




dbRouter.route('/AddEventData')
 .get(function (req, res){
     var url = 'mongodb://localhost:27017/eventsApp';
     
     mongodb.connect(url, function(err, db){
      
      var collection = db.collection('events');
      collection.insertMany(eventsData, function(err, results){
         res.send(results);
         db.close();
      });
     
    });
 });
 
 module.exports = dbRouter;