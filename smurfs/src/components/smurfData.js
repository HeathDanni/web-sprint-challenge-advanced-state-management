import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/smurfActions';

const SmurfData = (props) => {
    useEffect(() => {
        props.getSmurf()
    }, [props.getSmurf]);

    return (
            <>
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            </>
    )
};

const mapStateToProps = (state) => {
    return {
        name: state.name,
        age: state.age,
        height: state.height
    }
}

export default connect(mapStateToProps, {getSmurf})(SmurfData);