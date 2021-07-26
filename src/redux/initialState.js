import dog1 from '../img/dog1.jpg';
import dog2 from '../img/dog2.jpg';
import dog3 from '../img/dog3.jpg';
import audio1 from '../music/1.mp3';
import audio2 from '../music/2.mp3';
import audio3 from '../music/3.mp3';

export const initialState = {
    local: [
        dog1, 
        dog2, 
        dog3
    ],
    remote: [],
    audioLocal: {
        'Танечка Буланова' : audio1,
        'Руки вверх' : audio2,
        'Технология' : audio3
    },
    audioRemote: []
}
