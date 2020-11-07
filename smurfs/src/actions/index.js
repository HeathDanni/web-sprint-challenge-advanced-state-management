import axios from 'axios';


export const addSmurf = (newSmurf) => {
    return { type: 'ADD_SMURF', payload: newSmurf };
};

export const getSmurfs = () => (dispatch) => {
    axios
        .get('http://localhost:3333/smurfs')
        .then((res) => {
            console.log('res:', res)
        })
        .catch((err) => {
            console.log('err', err)
        })
};