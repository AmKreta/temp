import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import './result.styles.scss';

//custom component
//import SearchResultcard from './searchResultCard/searchResultCard.component';
import InfoCard from '../../../../reusableComponent/infoCard/infoCard.component.';

//importing actions
import { fetchSearchResult } from '../../../../../actions/action';

const Search = ({ result, query, category, filter, fetchSearchResult }) => {

    useEffect(() => {
        fetchSearchResult(query, category, filter);
        console.log('fetched');
    }, [query, category, filter]);

    return (
        <div className="result">
            {
                result.data.map((item) => <InfoCard data={item} key={item._id} />)
            }
        </div>
    );
}

const mapStateToProps = state => ({
    result: state.search.result,
    query: state.search.query,
    category: state.search.category,
    filter: state.search.filter,
    accessToken: state.token.accessToken
});

const mapDispatchToProps = dispatch => ({
    fetchSearchResult: (query, category, filter) => dispatch(fetchSearchResult(query, category, filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);