module.exports = (app) => {
	/* because of the consign, the app variable already has the controllers object as an attribute*/
	const { home } = app.controllers;
	app.get('/', home.index);
	app.post('/signin', home.login);
	app.get('/signout', home.logout);
};