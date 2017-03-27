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
}); 





//example of displaying all items from a database
app.get('/pages/data', function(req, res){ 
   connection.query("SELECT * FROM temps", function(err, rows, fields){
        var lineGraph = {values: []}; //initialize empty JSON object
        
        //iterating through the tuples to grab time, and temp to put send them to the front end for graphing
        for(i in rows){
            lineGraph.values.push({
                'time': rows[i].time, 
                'temp': rows[i].temp
            });
        }
        //new info
        //printing the JSON object to see if it entered properly. 
        console.log(lineGraph);

       //this may not be the best practice, but it gets the job done haha 
       //TODO: change rows to lineGraph so that it can be used with Google Charts 
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