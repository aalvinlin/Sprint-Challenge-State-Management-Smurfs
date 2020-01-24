import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE
} from "../actions";

const initialState = {
    data: ""
}

const testState = {
    data: "test state"
}

export const reducer = (state = initialState, action) => {


    switch (action.type) {

        case FETCHING_DATA_START:
            
            console.log('in the reducer', action.payload);

            return {...initialState, data: "ewh;afofkhwaeb" }

        default:
            return testState;
    }

}