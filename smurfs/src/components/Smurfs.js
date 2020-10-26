import React from 'react';
import { connect } from 'react-redux';

const Smurfs = ({smurfs}) => {
    console.log(smurfs)
    console.log(smurfs[0].age)
    return (
        <>
        {smurfs.map((el)=> {
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

export default connect(mapStateToProps)(Smurfs);
