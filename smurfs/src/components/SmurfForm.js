import React, { useState } from "react";

import { connect } from "react-redux";

import { search } from "../actions";

const SmurfForm = ({search}) => {

    const [userInput, setUserInput] = useState("");

    const handleSearch = (event) => {

        event.preventDefault();
        search();
    }

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleAdd = (event) => {

        event.preventDefault();
        console.log("trying to add a new smurf...", userInput)
    }

    return (
        <form>

            <button onClick={handleSearch}>Search for existing Smurfs</button>

            <hr />

            <input type="text" name="userInput" value={userInput} onChange={handleChange} placeholder="name of Smurf" />
            
            <button onClick={handleAdd}>Add a new Smurf</button>

        </form>
    )
}

const mapStateToProps = (state) => {

    return {
        storeStatus: state.storeStatus,
        results: state.results,
        errorMessage: state.errorMessage,
    }

}

export default connect(mapStateToProps, {search})(SmurfForm);