var nano    = require('nano')('https://snow2016.cloudant.com/_all_dbs');
var Cloudant = require('cloudant');

var me ="snow2016";// //"nodejs";         // Substitute with your Cloudant user account. 
var otherUsername = "snow2016"; // Substitute with some other Cloudant user account. 
var otherPassword ='Snow@6200';  

var Cloudant = require('cloudant');

module.exports =function(app) {
var dbs;

  app.get('/findall', function(req, res) {
      var student={name:"jeff", age:30}
      res.json(student);

      });//end app.get

  app.get('/showall', function(req, res){
    Cloudant({account:me, username:otherUsername, password:otherPassword}, function(er, cloudant, reply) {
  if (er) {
    //throw er;
    return console.log('***Error authenticating****: ' + er.message);
    res.send(er);
  }
  console.log('Connected with username: %s', reply.userCtx.name);
  
  dbs = cloudant.db.use("student");
  
   dbs.list({include_docs:true}, function(er, body){
     var student={}
     var person={}
     if (er){
       res.send(er);
     }
     body.rows.forEach(function(row){
       var doc =row.doc
       console.log("--",doc.name);
       if (doc.age){
         console.log('Add to person : %j', doc);
         student[doc._id]=doc.age
         person[doc._id]={'name':doc.name, 'age':doc.age, 'major':doc.major, 'GPA':doc.GPA}
       }
       console.log('all datas',student);
        
     })
     res.json(person); 
   })
   
  })//end get showall
  })

}//this end