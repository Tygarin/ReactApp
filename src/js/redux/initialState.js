import dog1 from '../../img/dog1.jpg';
import dog2 from '../../img/dog2.jpg';
import dog3 from '../../img/dog3.jpg';

export const initialState = {
    local: [
        dog1, 
        dog2, 
        dog3
    ],
    remote: [],
    imgId: 0,
    source: 'local'
}
