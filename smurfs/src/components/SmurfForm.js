import React from "react";

import { connect } from "react-redux";

import { search } from "../actions";

const SmurfForm = ({search}) => {

    const handleSearch = (event) => {

        event.preventDefault();
        search();
    }


    return (
        <form>
            <button onClick={handleSearch}>Search for existing Smurfs</button>
        </form>
    )
}

const mapStateToProps = (state) => {

    return {
        data: state.data
    }

}

export default connect(mapStateToProps, {search})(SmurfForm);