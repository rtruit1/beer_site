var express = require('express'); 
var bodyParser = require('body-parser');
var mysql = require('mysql'); 

//web application framework
var app = express(); 
 
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')



//credentials for connecting to the database 
var connection = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '', 
    database: 'sampledb'
});



connection.connect(function(err){
    if(err){
        console.log("Error connecting to the database"); 
    }
    else{
        console.log("Sucessfully connected to the database");
    }
}); 

app.get('/', function(req, res){
    res.render('pages/index'); 
}); 

app.post('/pages/myaction', function(req, res){
    var name = req.body.name;
    var email = req.body.email; 
    
    var info = {
        name: name, 
        email: email
    };
    JSON.stringify(info); 

    
    res.render('pages/myaction', info);  
    console.log("First Name: "+req.body.name); 
    console.log("Email: "+req.body.email); 
}); 





//example of displaying all items from a database
app.get('/pages/data', function(req, res){ 
   connection.query("SELECT * FROM mySampleTable", function(err, rows, fields){
       app.locals.information = rows; 
        if(!!err){
            console.log("Error executing query"); 
        }
        else{
            console.log("The query waas executed properly");
            console.log(rows[0].ID); 
            
        }
         res.render('pages/data'); 
   });  
});






app.listen(3000, function(){
    console.log("Listening on port 3000"); 
}); 