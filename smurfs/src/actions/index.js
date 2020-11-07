import axios from 'axios';


export const addSmurf = (newSmurf) => {
    return { type: 'ADD_SMURF', payload: newSmurf };
};

export const getSmurfs = () => (dispatch) => {
    dispatch({
        type: "FETCHING_SMURFS_START"});
    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            dispatch({
                type: "FETCHING_SMURFS_SUCCESS", payload: res.data})
            console.log('res:', res)
        })
        .catch((err) => {
            dispatch({
                type: "FETCHING_SMURFS_FAILURE", payload: err.response})
            console.log('err', err)
        })
};