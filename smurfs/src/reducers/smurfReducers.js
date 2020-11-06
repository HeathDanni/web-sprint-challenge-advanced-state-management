const initialState = {
    smurfs: [
    {
      name: 'Heather',
      age: 35,
      height: '6cm',
      id: 4
    },
    {
        name: 'Holly',
        age: 35,
        height: '6cm',
        id: 5
      }
]
};

export const smurfReducers = (state = initialState, action) => {
    switch (action.type) {
        case "FEATCHING_SMURF_START":
            return {...state};
        case "FEATCHING_SMURF_SUCCESS": 
            return {...state, smurfs: action.payload};
        case "FEATURE_SMURF_FAILURE":
            return {...state, error: action.payload};
        case "POST_SMURF":
            return state;
        default: 
           return state;
    }
};