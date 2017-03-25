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
    database: 'beerTemps'
});



connection.connect(function(err){
    if(err){
        console.log("Error connecting to the database"); 
    }
    else{
        console.log("Sucessfully connected to the database");
    }
}); 

//getting the index page
app.get('/', function(req, res){
    res.render('pages/index'); 
}); 

app.post('/pages/myaction', function(req, res){
    var username = req.body.username;
    var password = req.body.password; 
    
    var info = {
        name: username, 
        email: password
    };
    JSON.stringify(info); 

    
    res.render('pages/myaction', info);  
    console.log("First Name: "+req.body.username); 
    //console.log("Email: "+req.body.password); 
}); 





//example of displaying all items from a database
app.get('/pages/data', function(req, res){ 
   connection.query("SELECT * FROM temps", function(err, rows, fields){
       
       //this may not be the best practice, but it gets the job done haha 
       global.information = rows; 
        if(!!err){
            console.log("Error executing query"); 
        }
        else{
            console.log("The query waas executed properly");
            console.log(rows[0].Id); 
            
        }
         res.render('pages/data'); 
   });  
});






app.listen(3000, function(){
    console.log("App listening on port 3000"); 
}); 