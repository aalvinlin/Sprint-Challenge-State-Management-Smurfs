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

        default:
            return testState;
    }

}