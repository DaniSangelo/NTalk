module.exports = (app) => {
	const { contacts } = app.controllers;
	app.get('/contacts', contacts.index);
	app.get('/contacts/:id', contacts.show);
	app.post('/contacts', contacts.create);
	app.get('/contacts/:id/edit', contacts.edit);
	app.put('/contacts/:id', contacts.update);
	app.delete('/contacts/:id', contacts.destroy);
}