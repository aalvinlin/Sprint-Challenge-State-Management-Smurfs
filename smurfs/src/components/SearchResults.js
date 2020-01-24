import React from "react";
import { connect } from "react-redux";

const SearchResults = ({storeStatus}) => {

    console.log("search results", storeStatus);

    return (
        <div>
            <h2>Search Results</h2>
            
            <p>{storeStatus}</p>
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