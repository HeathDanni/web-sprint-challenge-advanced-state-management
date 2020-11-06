const initialState = {
    smurfs: [{
        name: "Raine",
        age: 0,
        height: "",
        id: 0

    },
   { 
       name: "Saiya",
        age: 0,
        height: "",
        id: 0
    }
]};

export const SmurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SMURF":
            return {...state}
    default:
        return {...state}
    }
};