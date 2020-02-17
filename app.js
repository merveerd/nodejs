var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hi there!');
});

app.get('/bye', function(req,res){
    res.send('byeee');
    console.log('DDD');
})

app.get('/speak/:message/:id', function(req, res){
    var message = req.params.message;
    var id = req.params.id;
    var result = '';
    console.log(req.params.id);
   for(var i= 0; i < id; i++){
    result += message + ' '; 
    }
    res.send(result);
});
app.get('*', function(req, res){
    res.send('There is no such a page like this vuhu');
})

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log('started');
})