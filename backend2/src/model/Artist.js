const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ArtistSchema = new Schema({
    name: String,
    about: String,
    thumbnail: {
        type: String,
        default: '../../assets/img/n.png',
    },
    song: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Song',
        },
    ],
    followers: Number,
    monthly_listener: Number,
})

module.exports = mongoose.model('Artist', ArtistSchema)
