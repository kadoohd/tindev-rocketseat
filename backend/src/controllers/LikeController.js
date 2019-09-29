const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        console.log('loggedDev', loggedDev)

        const targetDev = await Dev.findById(devId);
        console.log('targetDev', targetDev)

        if (!targetDev) {
            return res.status(500).json({ error: 'dev not exists' });
        }

        if (targetDev.likes.includes(loggedDev._id)) {
            console.log('deu match!');
        }

        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();

        return res.json(loggedDev);
    }
}