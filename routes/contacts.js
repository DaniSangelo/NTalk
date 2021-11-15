const authenticate = require('../middlewares/authenticator');
module.exports = (app) => {
	const { contact } = app.controllers;
	app.get('/contacts', authenticate, contact.index);
	app.get('/contact/:id', authenticate, contact.show);
	app.post('/contact', authenticate, contact.create);
	app.get('/contact/:id/edit', authenticate, contact.edit);
	app.put('/contact/:id', authenticate, contact.update);
	app.delete('/contact/:id', authenticate, contact.destroy);
}