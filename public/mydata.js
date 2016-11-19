var nano    = require('nano')('https://snow2016.cloudant.com/_all_dbs');
var Cloudant = require('cloudant');

var me = "nodejs";         // Substitute with your Cloudant user account. 
var otherUsername = "snow2016"; // Substitute with some other Cloudant user account. 
var otherPassword ='Snow@6200';  

var Cloudant = require('cloudant');

module.exports =function(app) {

var clod=Cloudant({account:me, username:otherUsername, password:otherPassword}, function(er, cloudant, reply) {
  if (er) {
    throw er;
  }
  console.log('Connected with username: %s', reply.userCtx.name);
  //var dbs = cloudant.db.use("student");
  //console.log('database alice created!**** ',dbs.find());
  //

//
  
});

 var dbs = clod.db.use('student');
//console.log("datadases:  --",dbs.list().path);
 dbs.find({selector:{name:'jeff peter'}}, function(er, result) {
  if (!er) {
    //throw er;
    //return console.log('Error authenticating: ' + er.message);
  //}
 
  console.log('Found %d documents with name Alice', result.docs.length);
  for (var i = 0; i < result.docs.length; i++) {
    console.log('  Doc id: %s', result.docs[i]._id);
  }
  }
});
 
 //

  dbs.get("90a6d9806c0345735e18de921d3f393b", function(err, data) {
    // The rest of your code goes here. For example: 
 
    console.log("Found dog:", data);
  }); 


 //console.log("testing --",clod.db.list());


    app.get('/students', function(req, res) {
      
      empController.getAllstudents(
      function(results)
       {
        res.json(results);  

        });


      });//end app.get

  
/*
  dbs.find({
  
  "selector": {
    "_id": {
      "$gt": 0
    }
  }
  

}, function(er, result) {
  if (er) {
    //throw er;
     return console.log('Error connecting to Cloudant account %s: %s', me, er.message)
  }
 
  console.log('Found %d documents with name Alice', result.docs.length);
  for (var i = 0; i < result.docs.length; i++) {
    console.log('  Doc id: %s', result.docs[i]._id);
  }
});
*/

}//this end module .exports