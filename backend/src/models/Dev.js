const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    user: {
        type: String,
        require: true
    },
    bio: String,
    avatar: {
        type: String,
        require: true
    },
    likes: [{
        // relacionamento 
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    dislikes: [{
        // relacionamento 
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]
}, {
        timestamps: true, // created_at, updated_at
    });

module.exports = model('Dev', DevSchema);