import React, { useEffect } from 'react';
import Smurf from './Smurf';
import {connect} from 'react-redux';
import { getSmurfs } from '../actions';

//this component will loop through the state array to add data to the Smurf component

// let smurfs = [
//     {
//       name: 'Brainey',
//       age: 200,
//       height: '5cm',
//       id: 0
//     },
//     {
//         name: 'Heather',
//         age: 100,
//         height: '6cm',
//         id: 1
//       }

//   ];


const SmurfList = (props) => {
    
    useEffect(() => {
        props.getSmurfs()
    }, [])

    // console.log(props.smurfs)

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