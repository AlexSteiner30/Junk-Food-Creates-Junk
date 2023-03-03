const express = require('express');
const app = express();

require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(port=process.env.PORT, function(){
    console.log('Server running on port ' + process.env.PORT);
});