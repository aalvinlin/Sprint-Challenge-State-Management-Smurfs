import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from "../actions";

const initialState = {
    searchStatus: "",
    results: "",
    errorMessage: "",
}

const testState = {
    searchStatus: "testState",
    results: "testResults",
    errorMessage: "testErrorMessage",
}

export const reducer = (state = initialState, action) => {


    switch (action.type) {

        case FETCHING_DATA_START:
            
            console.log('fetching data in the reducer', action.payload);

            return {...initialState, searchStatus: "Starting search..." }

        case FETCHING_DATA_SUCCESS:
        
            console.log('successfully fetched data. In reducer.', action.payload);

            return {...initialState, searchStatus: "Data returned!", results: action.payload }

        case FETCHING_DATA_FAILURE:
    
            console.log('error fetching data. In reducer.', action.payload);

            return {...initialState, searchStatus: "Error fetching data.", errorMessage: action.payload }
        
        default:
            return testState;
    }

}