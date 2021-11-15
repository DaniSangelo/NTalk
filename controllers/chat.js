const crypto = require('crypto');

module.exports = (app) => {
	const ChatController = {
		index (req, res){
			const { room } = req.query;
			let roomHash = room;
			if (!roomHash){
				const timestamp = Date.now().toString();
				const md5 = crypto.createHash('md5');
				roomHash = md5.update(timestamp).digest('hex');
			}
			res.render('chat/index', {room: roomHash });
		}
	}
	return ChatController;
};