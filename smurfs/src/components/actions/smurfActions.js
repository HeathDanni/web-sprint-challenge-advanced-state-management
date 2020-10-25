import axios from 'axios';

export const getSmurf = () => dispatch => {
    dispatch({ type: "FEATCHING_SMURF_START"});
    axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
        dispatch({type: "FEATCHING_SMURF_SUCCESS", payload: res});
        console.log('res', res);
    })
    .catch((err) => {
        dispatch({type: "FEATCHING_SMURF_FAILURE", payload: err.response.message})
        console.log('err', err);
    });
};