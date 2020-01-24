import React, { useState } from "react";

import { connect } from "react-redux";

import { search, addSmurf } from "../actions";

const SmurfForm = ({search, addSmurf}) => {

    const [newSmurfData, setNewSmurfData] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleSearch = (event) => {

        event.preventDefault();
        search();
    }

    const handleChange = (event) => {
        setNewSmurfData({...newSmurfData, [event.target.name]: event.target.value});
    }

    const handleAdd = (event) => {

        event.preventDefault();
        console.log("trying to add a new smurf...", newSmurfData)
        addSmurf(newSmurfData);
    }

    return (
        <form>

            <button onClick={handleSearch}>Search for existing Smurfs</button>
            <hr />
            <input type="text" name="name" value={newSmurfData.name} onChange={handleChange} placeholder="name of Smurf" />
            <input type="text" name="age" value={newSmurfData.age} onChange={handleChange} placeholder="age of Smurf" />
            <input type="text" name="height" value={newSmurfData.height} onChange={handleChange} placeholder="height of Smurf" />
            <button onClick={handleAdd}>Add a new Smurf</button>
            <hr />

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

export default connect(mapStateToProps, {search, addSmurf})(SmurfForm);