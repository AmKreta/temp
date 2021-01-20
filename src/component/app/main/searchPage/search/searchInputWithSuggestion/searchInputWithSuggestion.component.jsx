import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import './searchInputWithSuggestion.styles.scss';

//importing icons
import { AiOutlineSearch } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { BiBook } from 'react-icons/bi';

//reusable component
import Icon from '../../../../../reusableComponent/icon/icon.component';

//importing actions
import { setSearchQuery, fetchSearchResult, fetchSearchSuggestion } from '../../../../../../actions/action';

const SearchesAndSuggestions = ({ label, children, setSearchQuery, blurHandler }) => {
    return (
        <div className="searchesAndSuggestion" onClick={(e) => { setSearchQuery(label); blurHandler(); }}>
            {children}
            <p>
                {label}
            </p>
        </div>
    );
}

const SearchInputWithSuggestion = ({ recentSearches, query, blurHandler, setSearchQuery }) => {
    const inputRef = useRef(null);
    const [searchInput, setSearchInput] = useState(query);

    useEffect(() => {
        if (inputRef) {
            inputRef.current.focus();
        }
    });

    return (
        <div className="searchInputContainer">
            <div>

                <div className="searchInput">
                    <Icon>
                        <BiArrowBack onClick={blurHandler} />
                    </Icon>
                    <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} ref={inputRef} />
                    <Icon onClick={(e) => { blurHandler(); setSearchQuery(searchInput); }}>
                        <AiOutlineSearch />
                    </Icon>
                </div>

                <div className="recentSearchesAndSuggestion searches">
                    <p>Recent Search</p>
                    {
                        recentSearches.map((item, index) =>
                            <SearchesAndSuggestions key={index} label={item} setSearchQuery={setSearchQuery} blurHandler={blurHandler}>
                                <Icon size='16px' iconColor='#ccc'>
                                    <BsSearch />
                                </Icon>
                            </SearchesAndSuggestions>
                        )
                    }
                </div>

                <div className="recentSearchesAndSuggestion suggestion">
                    <p>Suggestion</p>
                    {
                        recentSearches.map((item, index) =>
                            <SearchesAndSuggestions key={index} label={item} setSearchQuery={setSearchQuery} blurHandler={blurHandler}>
                                <Icon size='16px' iconColor='#ccc'>
                                    <BiBook />
                                </Icon>
                            </SearchesAndSuggestions>
                        )
                    }
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    query: state.search.query
});

const mapDispatchToProps = dispatch => ({
    setSearchQuery: (val) => dispatch(setSearchQuery(val)),
    fetchSearchResult: () => dispatch(fetchSearchResult()),
    fetchSearchSuggestion: () => dispatch(fetchSearchSuggestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInputWithSuggestion);