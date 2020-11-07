import axios from 'axios';


export const addSmurf = (newSmurf) => (dispatch) => {
    dispatch({
        type: "SENDING_SMURF_START"});
        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then((res) => {
                dispatch({
                    type: "SENDING_SMURF_SUCCESS"})
                console.log('post res:', res)
            })
            .catch((err) => {
                dispatch({
                    type: "SENDING_SMURF_FAILURE"
                })
                console.log("err:", err)
            })
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