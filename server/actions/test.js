import User from '../model/user';

function insert() {
    
       var user = new User({
           username : 'Tracy McGrady',                 
           title: 'abcd',                         
           description: 37,                         
       });
   
       user.save(function (err, res) {
   
           if (err) {
               console.log("Error:" + err);
           }
           else {
               console.log("Res:" + res);
           }
   
       });
   }
   
   insert();