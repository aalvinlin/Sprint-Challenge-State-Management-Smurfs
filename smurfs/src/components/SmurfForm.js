import React, { useState } from "react";

import { connect } from "react-redux";

import { search, addSmurf } from "../actions";

const SmurfForm = ({search, addSmurf}) => {

    const [newSmurfData, setNewSmurfData] = useState({
        name: "",
        age: "",
        height: ""
    });

    const [errorText, setNewErrorText] = useState({
        name:"",
        age: "",
        height: ""
    });
    
    const handleSearch = (event) => {

        event.preventDefault();
        search();
    }

    const handleChange = (event) => {
        setNewSmurfData({...newSmurfData, [event.target.name]: event.target.value});

        // remove any previous error messages
        if (event.target.value !== "")
            { setNewErrorText({...errorText, [event.target.name]: ""}); }
    }

    const handleAdd = (event) => {

        event.preventDefault();

        // if (event.target.value === "")
        //     { setNewErrorText({...errorText, [event.target.name]: "Name cannot be blank!"}); }
        // else
        //     { setNewErrorText({...errorText, [event.target.name]: ""}); }

        if (newSmurfData.name === "")
            { setNewErrorText({...errorText, name: "Name cannot be blank!"}); }
        else
        
        if (newSmurfData.age === "")
            { setNewErrorText({...errorText, age: "Age cannot be blank!"}); }

        if (newSmurfData.height === "")
            { setNewErrorText({...errorText, height: "Height cannot be blank!"}); }

        console.log("trying to add a new smurf...", newSmurfData)

        if (newSmurfData.name !== "" && newSmurfData.age !== "" && newSmurfData.height !== "")
            {
                addSmurf(newSmurfData);
            }
    }

    return (
        <form>

            <button onClick={handleSearch} className="bigSearchButton">Search for existing Smurfs</button>
                <hr />
            
            <div className="addEditDeleteContainer">

                <div className="addSection">

                    <input type="text" name="name" value={newSmurfData.name} onChange={handleChange} placeholder="name of Smurf" />
                    <input type="text" name="age" value={newSmurfData.age} onChange={handleChange} placeholder="age of Smurf" />
                    <input type="text" name="height" value={newSmurfData.height} onChange={handleChange} placeholder="height of Smurf" />
                    <button onClick={handleAdd}>Add a new Smurf</button>

                    {errorText.name !== "" ? <p className="errorText">{errorText.name}</p> : <p></p>}
                    {errorText.age !== "" ? <p className="errorText">{errorText.age}</p> : <p></p>}
                    {errorText.height !== "" ? <p className="errorText">{errorText.height}</p> : <p></p>}

                </div>

                <div className="editSection">

                    <input type="text" name="id" value={newSmurfData.name} onChange={handleChange} placeholder="ID of Smurf" />

                    <input type="text" name="name" value={newSmurfData.name} onChange={handleChange} placeholder="name of Smurf" />
                    <input type="text" name="age" value={newSmurfData.age} onChange={handleChange} placeholder="age of Smurf" />
                    <input type="text" name="height" value={newSmurfData.height} onChange={handleChange} placeholder="height of Smurf" />
                    <button onClick={handleAdd}>Edit Smurf</button>

                    {errorText.name !== "" ? <p className="errorText">{errorText.name}</p> : <p></p>}
                    {errorText.age !== "" ? <p className="errorText">{errorText.age}</p> : <p></p>}
                    {errorText.height !== "" ? <p className="errorText">{errorText.height}</p> : <p></p>}

                </div>

                <div className="removeSection">

                    <input type="text" name="id" value={newSmurfData.name} onChange={handleChange} placeholder="ID of Smurf" />
                    <button onClick={handleAdd}>Delete Smurf</button>

                </div>

            </div>

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