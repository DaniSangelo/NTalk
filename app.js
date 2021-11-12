const express = require('express');
const path = require('path');
const consign = require('consign');
const app = express();

const dirName = __dirname;

app.set('views', path.join(dirName, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(dirName, 'public')));

consign({})
	.include('models')
	.then('controllers')
	.then('routes')
	.into(app);

app.listen(3000, () => {
	console.log('NTalk is running');
});