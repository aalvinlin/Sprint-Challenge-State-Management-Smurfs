import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,

    ADDING_DATA_START,
    ADDING_DATA_SUCCESS,
    ADDING_DATA_FAILURE,
} from "../actions";

const initialState = {
    storeStatus: "",
    results: "",
    errorMessage: "",
}

const testState = {
    storeStatus: "testState",
    results: "testResults",
    errorMessage: "testErrorMessage",
}

export const reducer = (state = initialState, action) => {


    switch (action.type) {

        case FETCHING_DATA_START:
            
            console.log('fetching data in the reducer', action.payload);

            return {...initialState, storeStatus: "Searching for a smurf..." }

        case FETCHING_DATA_SUCCESS:
        
            console.log('successfully fetched data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Smurf found.", results: action.payload }

        case FETCHING_DATA_FAILURE:
    
            console.log('error fetching data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Error fetching Smurf.", errorMessage: action.payload }
        
        case ADDING_DATA_START:
        
            console.log('fetching data in the reducer', action.payload);

            return {...initialState, storeStatus: "Adding a new Smurf..." }

        case ADDING_DATA_SUCCESS:
        
            console.log('successfully fetched data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Smurf added!", results: action.payload }

        case ADDING_DATA_FAILURE:
    
            console.log('error fetching data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Error adding Smurf.", errorMessage: action.payload }
        

        default:
            return state;
    }

}