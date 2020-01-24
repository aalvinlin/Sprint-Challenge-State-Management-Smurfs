import React from "react";
import { connect } from "react-redux";

const SearchResults = ({storeStatus, smurfs}) => {

    console.log("Component SearchFesults", storeStatus, smurfs);

    if (!smurfs)
    {
        return (<div></div>);
    }

    return (
        <div>
            <h2>Smurfs in Village</h2>
            
            {smurfs.map(smurf => <p>{smurf.name}: age {smurf.age}, height {smurf.height}</p>)}
        </div>
    )

}

const mapStateToProps = (state) => {

    return {
        storeStatus: state.storeStatus,
        smurfs: state.smurfs,
        errorMessage: state.errorMessage,
    }

}

export default connect(mapStateToProps, {})(SearchResults);