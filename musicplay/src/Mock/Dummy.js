/**
 * Define and export the dummy data.
 */

export const Playlists = [{
  id: '001',
  name: 'Anh 1',
  songs: 20,
  thumbnail: require('Assets/images/thumb_1.png')
},{
  id: '002',
  name: 'Anh 2',
  songs: 5,
  thumbnail: require('Assets/images/thumb_2.png')
},{
  id: '003',
  name: 'Anh 3',
  songs: 5,
  thumbnail: require('Assets/images/thumb_2.png')
}]

export const Artist = [{
  id: '001',
  title: 'Va vào giai điệu cùng MCK',
  thumbnail: require('Assets/images/mck_artist_album.png')
},{
  id: '002',
  title: 'Nhận lấy sự dễ thương từ Ameeeee',
  thumbnail: require('Assets/images/amee_artist_album.png')
},{
  id: '003',
  title: 'Thị mầu Minzy cùng những câu hát say đắm',
  thumbnail: require('Assets/images/hoaminzy_artist_album.png')
}]

export const Albums = [{
  id: '001',
  name: '"22"',
  artist: 'Mono',
  like: true,
  songs: 16,
  description: 'Ú òa! Mono chỉ là người đến sau',
  thumbnail: require('Assets/images/album22_mono.png'),
},{
  id: '002',
  name: '"99%"',
  artist: 'RPT MCK',
  like: true,
  songs: 16,
  description: 'Va vào giai điệu cùng MCK',
  thumbnail: require('Assets/images/album99%_mck.png')
},{
  id: '003',
  name: '"22"',
  artist: 'Mono',
  like: true,
  songs: 16,
  description: 'Ú òa! Mono chỉ là người đến sau',
  thumbnail: require('Assets/images/album22_mono.png')
}]

export const Favorite = [{
  id: '001',
  env: 'vn',
  url: '',
  title: 'Ai Mới Là Kẻ Xấu Xa',
  like: true,
  album: '"99%"',
  artist: 'RPT MCK',
  thumbnail: require('Assets/audio/13.png'),
  audio_filepath:require('Assets/audio/13.mp3'),
  lyric: `Your butt is mine... gonna tell you right
  Just show your face... throughout daylight
  I'm telling you... on how I feel
  Gonna hurt your mind... gonna shoot to kill
  Come on, come on, lay it on me
  All right
  I'm giving you... on the count of three
  To show your stuff... or let it be
  I'm telling you... just watch your mouth
  I know your game... what you're about
  Well they say the sky's the limit
  And to me that's really true
  But my friend you have seen nothing
  Just wait 'till I get through
  Because I'm bad (bad-bad), I'm bad, come on (really, really bad)
  You know I'm bad (bad-bad), I'm bad, you know it (really, really bad)
  You know I'm bad (bad-bad), I'm bad, come on (really, really bad) you know
  And the whole world has to answer right now
  Just to tell you once again
  Who's bad
  The word is out... you're doing wrong
  Gonna lock you up... before too long
  Your lying eyes... don't tell you right
  So listen up... don't make a fight
  Your talk is cheap...`
},{
  id: '002',
  env: 'vn',
  url: '',
  title: 'Thôi em đừng đi!',
  like: true,
  album: '"99%"',
  artist: 'RPT MCK',
  thumbnail: require('Assets/audio/13.png'),
  audio_filepath:require('Assets/audio/13.mp3'),
  lyric: `Your butt is mine... gonna tell you right
  Just show your face... throughout daylight
  I'm telling you... on how I feel
  Gonna hurt your mind... gonna shoot to kill
  Come on, come on, lay it on me
  All right
  I'm giving you... on the count of three
  To show your stuff... or let it be
  I'm telling you... just watch your mouth
  I know your game... what you're about
  Well they say the sky's the limit
  And to me that's really true
  But my friend you have seen nothing
  Just wait 'till I get through
  Because I'm bad (bad-bad), I'm bad, come on (really, really bad)
  You know I'm bad (bad-bad), I'm bad, you know it (really, really bad)
  You know I'm bad (bad-bad), I'm bad, come on (really, really bad) you know
  And the whole world has to answer right now
  Just to tell you once again
  Who's bad
  The word is out... you're doing wrong
  Gonna lock you up... before too long
  Your lying eyes... don't tell you right
  So listen up... don't make a fight
  Your talk is cheap...`
},{
  id: '003',
  env: 'vn',
  url: '',
  title: 'Ai Mới Là Kẻ Xấu Xa',
  album: '"99%"',
  artist: 'RPT MCK',
  like: true,
  thumbnail: require('Assets/audio/13.png'),
  audio_filepath:require('Assets/audio/13.mp3'),
  lyric: `Your butt is mine... gonna tell you right
  Just show your face... throughout daylight
  I'm telling you... on how I feel
  Gonna hurt your mind... gonna shoot to kill
  Come on, come on, lay it on me
  All right
  I'm giving you... on the count of three
  To show your stuff... or let it be
  I'm telling you... just watch your mouth
  I know your game... what you're about
  Well they say the sky's the limit
  And to me that's really true
  But my friend you have seen nothing
  Just wait 'till I get through
  Because I'm bad (bad-bad), I'm bad, come on (really, really bad)
  You know I'm bad (bad-bad), I'm bad, you know it (really, really bad)
  You know I'm bad (bad-bad), I'm bad, come on (really, really bad) you know
  And the whole world has to answer right now
  Just to tell you once again
  Who's bad
  The word is out... you're doing wrong
  Gonna lock you up... before too long
  Your lying eyes... don't tell you right
  So listen up... don't make a fight
  Your talk is cheap...`
},{
  id: '005',
  url: '',
  env: 'uk',
  title: 'Đánh mất anh là lỗi của em',
  album: '"99%"',
  artist: 'Duy Tân',
  thumbnail: require('Assets/images/thumb_3.png'),
  lyric: "Assets/lyrics/lyric1.txt",
  audio_filepath:require('Assets/audio/13.mp3'),

},{
  id: '006',
  url: '',
  env: 'uk',
  title: 'Đ mmm',
  album: '"99%"',
  artist: 'Duy Tân',
  thumbnail: require('Assets/images/thumb_3.png'),
  lyric: "Assets/lyrics/lyric1.txt",
  audio_filepath:'Assets/audio/13.mp3'
},{
  id: '007',
  url: '',
  env: 'uk',
  title: 'COncac',
  album: 'AYE',
  artist: 'Duy Tân',
  thumbnail: require('Assets/images/thumb_3.png'),
  lyric: "Assets/lyrics/lyric1.txt",
  audio_filepath:require('Assets/audio/13.mp3')
}]

const dummyData = { Albums,Artist, Playlists, Favorite };

export default dummyData;
