module.exports = (app, io) => {
	const onlines = {};
	io.on('connection', (client) => {
		const { session } = client.handshake;
		const { user } = session;
		onlines[user.email] = user.email;

		for(let email in onlines){
			client.emit('nofity-onlines', email);
			client.broadcast.emit('notify-onlines', email);
		}

		client.on('send-server', (hashRoom, msg) => {
			const newMessage = { email: user.name, room: hashRoom };
			const response = `<b>${user.name}:</b> ${msg}<br>`;
			session.room = hashRoom;
			client.broadcast.emit('new-message', newMessage);
			io.to(hashRoom).emit('send-client', response);
		});

		client.on('create-room', (hashRoom) => {
			session.room = hashRoom;
			client.join(hashRoom);
		});

		client.on('disconnect', () => {
			const { room } = session;
			const response = `<b>${user.name}:</b> saiu <br>`;
			delete onlines[user.email];
			session.room = null;
			client.leave(room);
			client.broadcast.emit('notify-offlines', user.email);
			io.to(room).emit('send-client', response);
		})
	});
};