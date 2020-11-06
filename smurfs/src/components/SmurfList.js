import React from 'react';
import Smurf from './Smurf';

//this component will loop through the state array to add data to the Smurf component

let smurfs = [
    {
      name: 'Brainey',
      age: 200,
      height: '5cm',
      id: 0
    },
    {
        name: 'Heather',
        age: 100,
        height: '6cm',
        id: 1
      }

  ];


const SmurfList = () => {
    return (
        <div>
            <h2>Here is a list of all the smurfs:</h2>
            {smurfs.map((el) => {
                return (
                <Smurf smurf={smurfs[smurfs.indexOf(el)]}/>
            )}
            )}
        </div>
    )
}

export default SmurfList;