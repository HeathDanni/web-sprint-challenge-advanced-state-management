import axios from 'axios';
import React, {useState} from 'react';
import { addSmurf } from '../actions';
import {connect} from 'react-redux';


//form to add new smurf
//this needs to add new smurf to smurfs array state
const initialState = {
    name: "",
    age: null,
    height: ""
};

const SmurfForm = (props) => {
    const [form, setForm] = useState(initialState)

    const handleChange = (e) => {
        e.persist();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    const submitForm = (e) => {
        props.addSmurf(form);
        setForm(initialState);

    }

    return (
        <div>
            <h2>Add a new smurf here:</h2>
            <form onSubmit={props.addSmurf(form)}>
                <label htmlFor='name'>
                    Name:
                    <input
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={form.name}
                    ></input>
                </label>
                <label htmlFor='age'>
                    Age:
                    <input
                    id='age'
                    name='age'
                    onChange={handleChange}
                    value={form.age}
                    ></input>
                </label>
                <label htmlFor='height'>
                    Height:
                    <input
                    id='height'
                    name='height'
                    onChange={handleChange}
                    value={form.height}
                    ></input>
                </label>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);