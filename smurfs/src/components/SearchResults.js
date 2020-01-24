import React from "react";
import { connect } from "react-redux";

const SearchResults = ({data}) => {

    console.log("search results", data);

    return (
        <div>
            <h2>Search Results</h2>
            
            <p>{data}</p>
        </div>
    )

}

const mapStateToProps = (state) => {

    return {
        data: state.data,
        results: state.results,
        errorMessage: state.errorMessage,
    }

}

export default connect(mapStateToProps, {})(SearchResults);