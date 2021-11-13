exports.notFound = (_, res) => {
	res.status(404);
	res.render('not-found');
};
exports.serverError = (error, _, res, _) => {
	res.status(500);
	res.render('server-error', { message: error.message});
}