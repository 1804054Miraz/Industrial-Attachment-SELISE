const express  = require('express');
const app  = express();

app.get('/',(req,res)=>{
    res.send("I am a get request at home route");
});
app.get('/',(req,res)=>{
    res.send("I am a get request at about route");
    res.end('response ended');
});
app.post('/',(req,res)=>{
    res.send("I am a post request at about route");
});
app.put('/',(req,res)=>{
    res.send("I am a put request at about route");
});
app.delete('/',(req,res)=>{
    res.send("I am a delete request at about route");
});

app.use((req,res)=>{
    res.send("404 page not found");
});


    module.exports = app;