import axios from 'axios';

export const getSmurf = () => dispatch => {
    dispatch({ type: "FEATCHING_SMURF_START"});
    axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
        console.log('res', res);
    })
    .catch((err) => {
        console.log('err', err);
    });
};