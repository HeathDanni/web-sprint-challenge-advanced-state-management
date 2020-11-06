import React, {useState} from 'react';
import { connect } from 'react-redux';

const SmurfForm = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
    });

    const handleChanges = (e) => {
        e.persist()
        setInputValue({
        [e.target.name]: e.targetvalue
        });
    };


    return (
        <div>
            <h2>Add a smurf!</h2>
            <form>
                <label htmlFor='name'>
                    Name:
                    <input
                    name='name'
                    id='name'
                    value={inputValue}
                    onChange={handleChanges}
                    ></input>
                </label>
                <label htmlFor='age'>
                    Age:
                    <input
                    name='age'
                    id='age'
                    value={inputValue}
                    onChange={handleChanges}
                    ></input>
                </label>
                <label htmlFor='height'>
                    Height:
                    <input
                    name='height'
                    id='id'
                    value={inputValue}
                    onChange={handleChanges}
                    ></input>
                </label>
            </form>
        </div>
    )
};

export default SmurfForm;