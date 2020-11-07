import React, { useEffect } from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';
import { getSmurfs } from '../actions';

const SmurfList = (props) => {
    
    useEffect(() => {
        props.getSmurfs()
    }, [])

    return (
        <div>
            <h2>Here is a list of all the smurfs:</h2>
            {props.smurfs.map((el) => {
                return (
                <Smurf smurf={props.smurfs[props.smurfs.indexOf(el)]}/>
            )}
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    };
};

export default connect(mapStateToProps, {getSmurfs})(SmurfList);