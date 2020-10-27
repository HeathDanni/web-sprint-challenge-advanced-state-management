import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurf } from '../actions/smurfActions';

const Smurfs = (props, {getSmurf}) => {

    useEffect(() => {
       props.getSmurf();
      }, props[getSmurf]);

    console.log(props.smurfs[0].name)

    return (
        <>
        {props.smurfs && props.smurfs.map((el)=> {
            return (
                <>
                    <p>name: {el.name}</p>
                    <p>age: {el.age}</p>
                    <p>height: {el.height}</p>
                </>
            )
        })}
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, {getSmurf})(Smurfs);
