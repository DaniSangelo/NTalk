module.exports = (app) => {
	/* por causa do consign , a vari�vel app j� possui como atributo o objeto controllers */
	/* because of the consign, the app variable already has the controllers object as an attribute*/
	const { home } = app.controllers;
	app.get('/', home.index);
};