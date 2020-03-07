var express = require('express');
var app = express();

app.get('/', function(request, reponse){
	reponse.send('<button>click</button>');
});

app.listen(3000, function(){
	console.log('ok fine');
});