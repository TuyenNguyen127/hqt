/**
 * Define and export the dummy data.
 */

export const Playlists = [{
  id: '001',
  name: 'Playlist 1',
  songs: 20,
  thumbnail: require('Assets/images/thumb_1.png')
},{
  id: '002',
  name: 'Playlist 2',
  songs: 5,
  thumbnail: require('Assets/images/thumb_2.png')
},{
  id: '003',
  name: 'Playlist 3',
  songs: 5,
  thumbnail: require('Assets/images/thumb_2.png')
}]

export const Artist = [{
  id: '001',
  artist: 'RPT MCK',
  title: 'Va vào giai điệu cùng MCK',
  like: true,
  songs: 16,
  description: 'Tuyển chọn những ca khúc hay nhất của MCK',
  thumbnail: require('Assets/images/mck_artist_album.png'),
  likeNumber: 100123,
  shareNumber: 100123
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
  likeNumber: 100123,
  shareNumber: 2606
},{
  id: '002',
  name: '"99%"',
  artist: 'RPT MCK',
  like: true,
  songs: 16,
  description: 'Va vào giai điệu cùng MCK',
  thumbnail: require('Assets/images/album99_mck.png'),
  likeNumber: 100123,
  shareNumber: 100123
},{
  id: '003',
  name: '"22"',
  artist: 'Mono',
  like: true,
  songs: 16,
  description: 'Ú òa! Mono chỉ là người đến sau',
  thumbnail: require('Assets/images/album22_mono.png'),
  likeNumber: 100123,
  shareNumber: 2975
}]

export const Favorite = [{
  id: '001',
  env: 'vn',
  thumbnail: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/01%2000%20Intro%20%20RPT%20MCK%20%2099%20the%20album.mp3?alt=media&token=6145a003-43f6-42bd-96b5-45cd95eb6452',
  title: 'Ai Mới Là Kẻ Xấu Xa',
  like: true,
  album: '"99%"',
  artist: 'RPT MCK',
  
  
  
  lyric: ``
},{
  id: '002',
  env: 'vn',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Thôi em đừng đi!',
  like: false,
  album: '"99%"',
  artist: 'RPT MCK',
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Chìm sâu',
  album: '"99%"',
  artist: 'RPT MCK',
  like: true,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  env: 'vn',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Badtrip',
  album: '"99%"',
  artist: 'RPT MCK',
  like: false,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  id: '006',
  env: 'gb',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Stay',
  album: '',
  artist: 'Justin Bieber',
  like: false,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  id: '007',
  env: 'gb',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: "THAT'S NOT HOW THIS WORKS",
  album: '',
  artist: 'Charlie Puth (FEAT. DAN + SHAY)',
  like: true,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  id: '004',
  env: 'vn',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Sui & Tie',
  album: '"99%"',
  artist: 'RPT MCK (feat. Hoàng Tôn)',
  like: false,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  id: '008',
  env: 'vn',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Anh đã ổn hơn',
  album: '"99%"',
  artist: 'RPT MCK',
  like: true,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  id: '009',
  env: 'gb',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Loser',
  album: '',
  artist: 'Charlie Puth',
  like: true,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  id: '010',
  env: 'gb',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Light Switch',
  album: '',
  artist: 'Charlie Puth',
  like: false,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  id: '011',
  env: 'gb',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Blinding Lights',
  album: '',
  artist: 'The Weeknd',
  like: true,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
  id: '012',
  env: 'gb',
  url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
  title: 'Sugar',
  album: '',
  artist: 'Maroon 5',
  like: false,
  
  artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
  
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
}]

export const Notification = [{
  id: '01',
  title: 'Hôm nay nghe gì',
  description: 'Mai là cuối tuần',
  thumbnail: require('Assets/images/thumb_3.png')
},{
  id: '02',
  title: 'Tháng tư nghe gì',
  description: 'Âm nhạc tháng 4',
  thumbnail: require('Assets/images/thumb_3.png')
},{
  id: '03',
  title: 'GENZ nghe gì',
  description: 'Nhạc trẻ chất lượng',
  thumbnail: require('Assets/images/thumb_3.png')
}]

export const NotificationLink = [{
  id: '001',
  id_noti: '01',
  title: 'Bài này vui phết',
  description: 'Bài hát với giai điệu vui vẻ free style thỏa mãn người nghe',
  navigation_link: 'Player',
  id_object: '001',
  item: {
    id: '010',
    env: 'gb',
    url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
    title: 'Light Switch',
    album: '',
    artist: 'Charlie Puth',
    like: false,
    
    artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
    
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
  },
  thumbnail: require('Assets/images/thumb_3.png')
},{
  id: '002',
  id_noti: '01',
  title: 'Ưng quá chừng',
  description: 'Bài hát dễ thương đến từ cô nàng siêu đáng yêu',
  navigation_link: 'Player',
  id_object: '001',
  thumbnail: require('Assets/images/thumb_3.png')
},{
  id: '003',
  id_noti: '01',
  title: '"99%" và 1% chưa hoàn thiện (có lẽ vậy) ',
  description: 'Album nhạc chất lượng từ rapper siêu hot MCK',
  navigation_link: 'Thealbums',
  id_oboject: '001',
  item: {
    id: '002',
    name: '"99%"',
    artist: 'RPT MCK',
    like: true,
    songs: 16,
    description: 'Va vào giai điệu cùng MCK',
    thumbnail: require('Assets/images/album99_mck.png'),
    likeNumber: 100123,
    shareNumber: 100123
  },
  thumbnail: require('Assets/images/thumb_3.png')
}]

export const ArtistMCK = [{
    id: '001',
    env: 'vn',
    url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
    title: 'Ai Mới Là Kẻ Xấu Xa',
    like: true,
    album: '"99%"',
    artist: 'RPT MCK',
    
    artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
    
    lyric: ``
  },{
    id: '002',
    env: 'vn',
    url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
    title: 'Thôi em đừng đi!',
    like: false,
    album: '"99%"',
    artist: 'RPT MCK',
    
    artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
    
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
    url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
    title: 'Chìm sâu',
    album: '"99%"',
    artist: 'RPT MCK',
    like: true,
    
    artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
    
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
    id: '004',
    env: 'vn',
    url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
    title: 'Sui & Tie',
    album: '"99%"',
    artist: 'RPT MCK (feat. Hoàng Tôn)',
    like: false,
    
    artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
    
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
    env: 'vn',
    url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
    title: 'Badtrip',
    album: '"99%"',
    artist: 'RPT MCK',
    like: false,
    
    artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
    
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
    id: '008',
    env: 'vn',
    url: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/07%20Th%C3%B4i%20Em%20%C4%90%E1%BB%ABng%20%C4%90i%20%20RPT%20MCK%20%20ft%20Trung%20Tr%E1%BA%A7n%20%20%20%2099%20%20the%20album.mp3?alt=media&token=96d85387-ae37-49dc-8b64-559420b43b34',
    title: 'Anh đã ổn hơn',
    album: '"99%"',
    artist: 'RPT MCK',
    like: true,
    
    artwork: 'https://firebasestorage.googleapis.com/v0/b/music-app-2e474.appspot.com/o/Images%2FThumbnails%2FArtists%2FRPT%20MCK.jpg?alt=media&token=058196d2-5f08-4218-a16d-7821601d47a1',
    
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
  }
]

const dummyData = { Albums,Artist, Playlists, Favorite, Notification, NotificationLink, ArtistMCK };

export default dummyData;
