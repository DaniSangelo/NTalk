const express = require('express');
const path = require('path');
const consign = require('consign');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const expressSession = require('express-session');

const app = express();

const dirName = __dirname;

app.set('views', path.join(dirName, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride('_method')); /* Allows a route to be used by distinct http methods */
app.use(express.static(path.join(dirName, 'public')));

consign({})
	.include('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.listen(3000, () => {
	console.log('NTalk is running');
});