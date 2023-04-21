const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlaylistSchema = new Schema({
    user_id: mongoose.Types.ObjectId, // none: => user create
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        default: '../../assets/img/n.png',
    },
    songs: {
        type: [mongoose.Types.ObjectId],
        ref: 'Song',
    },
})

module.exports = mongoose.model('Playlist', PlaylistSchema)
