const axios = require('axios');
const Dev = require('../models/Dev')
module.exports = {

    async index(req, res) {
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            // aplica os 3 filtros de uma vez só
            $and: [
                // todos os usuario que o id nao seja igual ao que estamos passando,
                { _id: { $ne: user } },
                // exclue usuario que o suuario logado ja deu like
                { _id: { $nin: loggedDev.likes } },
                // exclue usuario que o suuario logado ja deu dislike
                { _id: { $nin: loggedDev.dislikes } }
            ],
        })

        return res.json(users);
    },

    async store(req, res) {
        const { username } = req.body;

        const userExists = await Dev.findOne({ user: username });

        if (userExists) {
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio, avatar_url: avatar } = response.data;

        const dev = await Dev.create({
            name: name,
            user: username,
            bio: bio,
            avatar: avatar
        })

        return res.json(dev);
    }
}