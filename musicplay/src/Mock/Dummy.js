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
  name: "Albums'22'",
  artist: 'Mono',
  thumbnail: require('Assets/images/album22_mono.png')
},{
  id: '002',
  name: "Albums'99%'",
  artist: 'RPT MCK',
  thumbnail: require('Assets/images/album99%_mck.png')
},{
  id: '003',
  name: "Albums'22'",
  artist: 'Mono',
  thumbnail: require('Assets/images/album22_mono.png')
}]

export const Favorite = [{
  id: '001',
  env: 'vn',
  url: '',
  title: 'Ai Mới Là Kẻ Xấu Xa',
  album: '99%',
  artist: 'RPT MCK',
  thumbnail: require('Assets/audio/13.png'),
  audio_filepath:''
},{
  id: '002',
  url: '',
  env: 'vn',
  title: 'Đánh mất anh là lỗi của em',
  album: 'AYE',
  artist: 'Duy Tân',
  thumbnail: require('Assets/images/thumb_3.png'),
  audio_filepath:''
},{
  id: '003',
  url: '',
  env: 'vn',
  title: 'Đánh mất anh là lỗi của em',
  album: 'AYE',
  artist: 'Duy Tân',
  thumbnail: require('Assets/images/thumb_3.png'),
  audio_filepath:''
},{
  id: '005',
  url: '',
  env: 'uk',
  title: 'Đánh mất anh là lỗi của em',
  album: 'AYE',
  artist: 'Duy Tân',
  thumbnail: require('Assets/images/thumb_3.png'),
  audio_filepath:''
},{
  id: '006',
  url: '',
  env: 'uk',
  title: 'Đ mmm',
  album: 'AYE',
  artist: 'Duy Tân',
  thumbnail: require('Assets/images/thumb_3.png'),
  audio_filepath:''
},{
  id: '007',
  url: '',
  env: 'uk',
  title: 'COncac',
  album: 'AYE',
  artist: 'Duy Tân',
  thumbnail: require('Assets/images/thumb_3.png'),
  audio_filepath:''
}]

const dummyData = { Albums,Artist, Playlists, Favorite };

export default dummyData;
