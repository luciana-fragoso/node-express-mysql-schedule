var express = require('express');

var db = require('./database');
var app=express();


app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'pug')




app.get('/',function(req,res) {
    db.query('SELECT * FROM schedule', (err,rows) => {
        if(err) throw err;
        res.render('index', {rows:rows});
      });
    
});

app.get("/new",function(req,res){
    db.query('SELECT * FROM schedule', (err,rows) => {
        if(err) throw err;
        res.render('newSchedule', {rows:rows});
      });
});

app.post("/schedules/new",function(req,res){
    let values = [req.body.username,req.body.dayOfWeek,req.body.start_at,req.body.end_at];
    db.query("INSERT INTO schedule (username,dayOfWeek,start_at,end_at) values (?)",[values] , (err,usernames) => {
        if(err) throw err;
       res.redirect('/');
      });
});



var server=app.listen(3000,function() {});



