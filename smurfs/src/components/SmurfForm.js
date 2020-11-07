import axios from 'axios';
import React, {useState} from 'react';


//form to add new smurf
//this needs to add new smurf to smurfs array state
const initialState = {
    name: "",
    age: null,
    height: ""
};

const SmurfForm = () => {
    const [form, setForm] = useState(initialState)

    const handleChange = (e) => {
        e.persist();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log('form:', form)

    const addSmurf = (e) => {
        axios
            .post('http://localhost:3333/smurfs', form)
            .then((res) => {
                console.log('post res:', res)
            })
            .catch((err) => {
                console.log(err)
            })

        setForm(initialState);

    }

    return (
        <div>
            <h2>Add a new smurf here:</h2>
            <form onSubmit={addSmurf}>
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

export default SmurfForm;