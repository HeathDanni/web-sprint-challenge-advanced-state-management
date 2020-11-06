import React from 'react';

//this component will handle making an indivdiual smurf.  does not need state.  can instead use props.

const Smurf = (props) => {
    return (
        <div>
            <p>Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    )
}

export default Smurf;