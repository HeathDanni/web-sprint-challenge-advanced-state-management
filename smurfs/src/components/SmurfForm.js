import React, {useState} from 'react';

//form to add new smurf

const SmurfForm = () => {
    const [form, setForm] = useState({
        name: "",
        age: 0,
        height: "",
        id: Date.now()
    })

    const handleChange = (e) => {
        e.persist();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    console.log('form:', form)
    
    return (
        <div>
            <h2>Add a new smurf here:</h2>
            <label htmlFor='name'>
                Name:
                <input
                id='name'
                name='name'
                onChange={handleChange}
                ></input>
            </label>
            <label htmlFor='age'>
                Age:
                <input
                id='age'
                name='age'
                onChange={handleChange}
                ></input>
            </label>
            <label htmlFor='height'>
                Height:
                <input
                id='height'
                name='height'
                onChange={handleChange}
                ></input>
            </label>
        </div>
    )
}

export default SmurfForm;