import TrackPlayer  from 'react-native-track-player';
import audio1 from './music/1.mp3';
import audio2 from './music/2.mp3';
import audio3 from './music/3.mp3';

const songs = [
    {
      title: "Танечка Буланова",
      id: 1,
      url : audio1
    },
    {
      title: "Руки вверх",
      id: 2,
      url : audio2
    },
    {
      title: "Технология",
      id: 3,
      url : audio3
    }
];

export default songs;