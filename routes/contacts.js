module.exports = (app) => {
	const { contacts } = app.controllers;
	app.get('/contacts', contacts.index);
}