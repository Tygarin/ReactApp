import TrackPlayer, { TrackPlayerEvents, State } from 'react-native-track-player';
import { EventRegister } from 'react-native-event-listeners';

module.exports = async function() {
    TrackPlayer.addEventListener('remote-previous', () => TrackPlayer.skipToPrevious())
    TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play())
    TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause())
    TrackPlayer.addEventListener('remote-stop', () => TrackPlayer.stop())
    TrackPlayer.addEventListener('remote-next', () => TrackPlayer.skipToNext())
}

