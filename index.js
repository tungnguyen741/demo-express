const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRoute = require('./route/user.route');

//POST Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//Use Pug
app.set('view engine', 'pug');
app.set('views', 'C:\\xampp\\htdocs\\demo_ExpressJs\\demo-express\\views');
//Use Routes
app.use('/users', userRoute);

app.listen(8080, (req, res) => {
    console.log('ok fine');
});