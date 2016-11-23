var Cloudant = require('cloudant');

var me ="snow2016";// //"nodejs";         // Substitute with your Cloudant user account. 
var otherUsername = "snow2016"; // Substitute with some other Cloudant user account. 
var otherPassword ='Snow@6200';  

var Cloudant = require('cloudant');

module.exports =function(app) {
var dbs;

app.get('/employees', function(req, res){
    Cloudant({account:me, username:otherUsername, password:otherPassword}, function(er, cloudant, reply) {
  if (er) {
    //throw er;
    return console.log('***Error authenticating****: ' + er.message);
    res.send(er);
  }
  console.log('Connected with username: %s', reply.userCtx.name);
  
  dbs = cloudant.db.use("employees");
  
   dbs.list({include_docs:true}, function(er, body){
     var employees={}
     //var persons={}
     if (er){
       res.send(er);
     }
     body.rows.forEach(function(row){
       var doc =row.doc
       console.log("--",doc.name);
       if (doc.age){
         console.log('Add to person : %j', doc);
         //employees[doc._id]=doc.age
         employees[doc._id]={'_id':doc._id,'name':doc.name, 'age':doc.age,'status':doc.status,'title':doc.title, 'salary':doc.salary,'image':doc.image}
       }
       console.log('all datas',employees);
        
     })
     res.json(employees); 
   })
   
  })
  })//end get employee





  


}//this end module .exports