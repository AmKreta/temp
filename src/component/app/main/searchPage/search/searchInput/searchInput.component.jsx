import React from 'react';
import { connect } from 'react-redux';
import './searchInput.styles.scss';

//reusable component
import InputWithIcon from '../../../../../reusableComponent/InputwithIcon/inputWithIcon.component';

const SearchInput = ({ query, focusHandler, recentSearches }) => {
    return (
        <div className="search">
            <div className="searchInput">
                <InputWithIcon
                    width='80%'
                    padding='0 2%'
                    value={query}
                    onFocus={focusHandler}
                    height='100%'
                    onChange={() => { }}
                    placeHolder='search'
                />
                <div className="searchButtonContainer">
                    <button type='button' >ReOrder</button>
                </div>
            </div>
            <div className="recentSearch">
                <div>
                    <p>Recent Search:-</p>
                    {
                        recentSearches.map((item, index) => <p key={index}>{item}</p>)
                    }
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    query: state.search.query
});

export default connect(mapStateToProps)(SearchInput);