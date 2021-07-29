import TrackPlayer from 'react-native-track-player';
import audio1 from './music/1.mp3';
import audio2 from './music/2.mp3';
import audio3 from './music/3.mp3';

const songs = [
  {
    title: "Татьяна Буланова",
    id: 0,
    url: audio1,
    artwork: require('./img/authors/bulanova.jpg')
  },
  {
    title: "Руки вверх",
    id: 1,
    url: audio2,
    artwork: require('./img/authors/hand.jpg')
  },
  {
    title: "Технология",
    id: 2,
    url: audio3,
    artwork: require('./img/authors/tech.jpg')
  }
];

export default songs;