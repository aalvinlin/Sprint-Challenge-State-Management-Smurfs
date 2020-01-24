import React, { useState } from "react";

import { connect } from "react-redux";

import { search, addSmurf, editSmurf, deleteSmurf } from "../actions";

const SmurfForm = ({search, addSmurf, editSmurf, deleteSmurf}) => {

    const [addSmurfData, setAddSmurfData] = useState({
        name: "",
        age: "",
        height: ""
    });

    const [editSmurfData, setEditSmurfData] = useState({
        editId: undefined,
        editName: "",
        editAge: "",
        editHeight: ""
    });

    const [deleteSmurfData, setDeleteSmurfData] = useState(undefined)

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
        setAddSmurfData({...addSmurfData, [event.target.name]: event.target.value});

        // remove any previous error messages
        if (event.target.value !== "")
            { setNewErrorText({...errorText, [event.target.name]: ""}); }
    }

    const handleDeleteChange = (event) => {
        setDeleteSmurfData(event.target.value);
    }

    const handleAdd = (event) => {

        event.preventDefault();

        // if (event.target.value === "")
        //     { setNewErrorText({...errorText, [event.target.name]: "Name cannot be blank!"}); }
        // else
        //     { setNewErrorText({...errorText, [event.target.name]: ""}); }

        if (addSmurfData.name === "")
            { setNewErrorText({...errorText, name: "Name cannot be blank!"}); }
        else
        
        if (addSmurfData.age === "")
            { setNewErrorText({...errorText, age: "Age cannot be blank!"}); }

        if (addSmurfData.height === "")
            { setNewErrorText({...errorText, height: "Height cannot be blank!"}); }

        console.log("trying to add a new smurf...", addSmurfData)

        if (addSmurfData.name !== "" && addSmurfData.age !== "" && addSmurfData.height !== "")
            {
                addSmurf(addSmurfData);
            }
    }

    
    const handleEdit = (event) => {

        console.log("trying to edit smurf...", editSmurfData)

        event.preventDefault();
    }

    const handleDelete = (event) => {

        console.log("trying to delete smurf...", deleteSmurfData)

        event.preventDefault();
        deleteSmurf(deleteSmurfData);
    }

    return (
        <form>

            <button onClick={handleSearch} className="bigSearchButton">Search for existing Smurfs</button>
                <hr />
            
            <div className="addEditDeleteContainer">

                <div className="addSection">

                    <input type="text" name="name" value={addSmurfData.name} onChange={handleChange} placeholder="name of Smurf" />
                    {errorText.name !== "" ? <p className="errorText">{errorText.name}</p> : <p></p>}
                    
                    <input type="text" name="age" value={addSmurfData.age} onChange={handleChange} placeholder="age of Smurf" />
                    {errorText.age !== "" ? <p className="errorText">{errorText.age}</p> : <p></p>}
                    
                    <input type="text" name="height" value={addSmurfData.height} onChange={handleChange} placeholder="height of Smurf" />
                    {errorText.height !== "" ? <p className="errorText">{errorText.height}</p> : <p></p>}
                    
                    <button onClick={handleAdd}>Add a new Smurf</button>

                    
                    
                    

                </div>

                <div className="editSection">

                    <input type="text" name="id" value={editSmurfData.id} onChange={handleChange} placeholder="ID of Smurf" />

                    <input type="text" name="editName" value={editSmurfData.name} onChange={handleChange} placeholder="name of Smurf" />
                    <input type="text" name="editAge" value={editSmurfData.age} onChange={handleChange} placeholder="age of Smurf" />
                    <input type="text" name="editHeight" value={editSmurfData.height} onChange={handleChange} placeholder="height of Smurf" />
                    <button onClick={handleEdit}>Edit Smurf</button>

                </div>

                <div className="removeSection">

                    <input type="text" name="delteId" value={deleteSmurfData} onChange={handleDeleteChange} placeholder="ID of Smurf" />
                    <button onClick={handleDelete}>Delete Smurf</button>

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

export default connect(mapStateToProps, {search, addSmurf, editSmurf, deleteSmurf})(SmurfForm);