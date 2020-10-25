const initialState = {
          name: "Brainey",
          age: 200,
          height: "5cm",
          id: 0
};

export const smurfReducers = (state = initialState, action) => {
    switch (action.type) {
        case "FEATCHING_SMURF_START":
            return {...state};
        case "FEATCHING_SMURF_SUCCESS": 
            return {...state, name: action.payload.name, age: action.payload.age, height: action.payload.height};
        case "FEATURE_SMURF_FAILURE":
            return {...state, error: action.payload};
        default: 
           return state;
    }
};