const authenticate = require('../middlewares/authenticator');
module.exports = (app) => {
	const { chat } = app.controllers;
	app.get('/chat', authenticate, chat.index);
};