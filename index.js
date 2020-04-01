const express = require('express');
const pug = require('pug');
const app = express();


app.set('view engine', 'pug');
app.set('views', 'C:\\xampp\\htdocs\\demo_ExpressJs\\demo-express\\views');

app.get('/', (req, res) => {
    res.render('index',
    	users = [
    		{name:'Tung', age: 15},
    		{name:'Phuong', age: 15},
    		{name:'Tam', age: 15},
    		{name:'Hoa', age: 15},	
    	])
});

app.listen(8000, (req, res) => {
    console.log('ok fine');
});
 