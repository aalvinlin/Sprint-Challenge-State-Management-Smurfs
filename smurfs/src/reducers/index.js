import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,

    ADDING_DATA_START,
    ADDING_DATA_SUCCESS,
    ADDING_DATA_FAILURE,

    EDITING_DATA_START,
    EDITING_DATA_SUCCESS,
    EDITING_DATA_FAILURE,

    DELETING_DATA_START,
    DELETING_DATA_SUCCESS,
    DELETING_DATA_FAILURE,
} from "../actions";

const initialState = {
    storeStatus: "",
    smurfs: [],
    errorMessage: "",
}

const testState = {
    storeStatus: "testState",
    smurfs: [],
    errorMessage: "testErrorMessage",
}

export const reducer = (state = initialState, action) => {


    switch (action.type) {

        // actions for fetching all the Smurf in the village

        case FETCHING_DATA_START:
            
            console.log('fetching data in the reducer', action.payload);

            return {...initialState, storeStatus: "Searching for a smurf..." }

        case FETCHING_DATA_SUCCESS:
        
            console.log('successfully fetched data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Smurf found.", smurfs: action.payload }

        case FETCHING_DATA_FAILURE:
    
            console.log('error fetching data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Error fetching Smurf.", errorMessage: action.payload }
        
        // actions for adding a new Smurf to the village

        case ADDING_DATA_START:
        
            console.log('adding data in the reducer', action.payload);

            return {...initialState, storeStatus: "Adding a new Smurf..." }

        case ADDING_DATA_SUCCESS:
        
            console.log('successfully added data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Smurf added!", smurfs: [...state.smurfs, action.payload] }

        case ADDING_DATA_FAILURE:
    
            console.log('error adding data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Error adding Smurf.", errorMessage: action.payload }
        
        // actions for deleting a Smurf by ID

        case DELETING_DATA_START:
        
            console.log('deleting data in the reducer', action.payload);

            return {...initialState, storeStatus: "Deleting Smurf..." }

        case DELETING_DATA_SUCCESS:
        
            console.log('successfully deleted data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Smurf deleted!", smurfs: state.smurfs.filter(smurf => smurf.id === action.payload) }

        case DELETING_DATA_FAILURE:
    
            console.log('error deleting data. In reducer.', action.payload);

            return {...initialState, storeStatus: "Error deleting Smurf.", errorMessage: action.payload }
        

        default:
            return state;
    }

}