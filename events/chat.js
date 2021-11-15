module.exports = (app, io) => {
	io.on('connection', (client) => {
		const { session } = client.handshake;
		const { user } = session;
		client.on('send-server', (msg) => {
			const response = `<b>${user.name}:</b> ${msg}<br>`;
			client.emit('send-client', response);
			client.broadcast.emit('send-client', response);
		});
	});
};