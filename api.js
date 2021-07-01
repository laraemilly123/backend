const express = require ('express'); 

const app = express(); 

app.get('/teste', function(req,res){
    res.send('servidor funcionando');
})

app.listen (8080); 
console.log ('api na porta'); 