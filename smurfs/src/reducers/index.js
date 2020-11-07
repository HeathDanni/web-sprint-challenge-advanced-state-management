const initialState = {
    loading: false,
    smurfs: []
};

export const SmurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_SMURF":
            return {
                ...state
            };
        case "FETCHING_SMURFS_START" :
            return {
                ...state, loading: true
            };
            case "FETCHING_SMURFS_SUCCESS" :
                return {
                   ...state, smurfs: action.payload
                };
            case "FETCHING_SMURFS_FAILURE" :
                return {
                    ...state
                };
            case "SENDING_SMURF_START":
                return {
                    ...state
                };
            case "SENDING_SMURF_SUCCESS":
                return {
                    ...state
                };
            case "SENDING_SMURF_FAILURE":
                return {
                    ...state
                };
            default:
                return {
                    ...state
                };
        }
};