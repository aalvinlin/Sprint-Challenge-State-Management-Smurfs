import React from "react";
import { connect } from "react-redux";

const SearchResults = ({storeStatus, smurfs}) => {

    console.log("Component SearchFesults", smurfs);

    if (smurfs.length === 0)
    {
        return (<div></div>);
    }
    
    return (
        <div>
            <h2>{smurfs.length} Smurfs in Village</h2>
            
            {smurfs.map(smurf =>
                <p key={smurf.id}>{smurf.name}: age {smurf.age}, height {smurf.height}</p>)}
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