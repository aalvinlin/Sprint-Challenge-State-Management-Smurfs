import React from "react";
import { connect } from "react-redux";

const SearchResults = ({storeStatus, results}) => {

    console.log("Component SearchFesults", storeStatus, results);

    if (!results)
    {
        return (<div></div>);
    }

    return (
        <div>
            <h2>Smurfs in Village</h2>
            
            {results.map(smurf => <p>{smurf.name}: age {smurf.age}, height {smurf.height}</p>)}
        </div>
    )

}

const mapStateToProps = (state) => {

    return {
        storeStatus: state.storeStatus,
        results: state.results,
        errorMessage: state.errorMessage,
    }

}

export default connect(mapStateToProps, {})(SearchResults);