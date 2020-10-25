import axios from 'axios';

export const getSmurf = () => dispatch => {
    dispatch({ type: "FEATCHING_SMURF_START"});
    axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
        dispatch({type: "FEATCHING_SMURF_SUCCESS", payload: res.data});
        console.log('res', res.data);
    })
    .catch((err) => {
        dispatch({type: "FEATCHING_SMURF_FAILURE"})
        console.log('err', err);
    });
};