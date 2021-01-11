import React, { useState, useCallback } from 'react';
import './search.styles.scss';

import SearchInput from './searchInput/searchInput.component';
import SearchInputWithSuggestion from './searchInputWithSuggestion/searchInputWithSuggestion.component';

const Search = ({ searchInput, setSearchInput }) => {

    const [isFocused, setIsFocused] = useState(false);
    const [recentSearches, setRecentSearches] = useState(['abc', 'abc', 'abc']);

    const changeHandler = useCallback((e) => {
        setSearchInput(e.target.value);
    }, [setSearchInput]);

    const focusHandler = useCallback((e) => {
        setIsFocused(true);
    }, []);

    const blurHandler = useCallback((e) => {
        setIsFocused(false);
    }, []);


    return (
        <React.Fragment>
            <SearchInput {...{ searchInput, recentSearches, focusHandler }} />
            {
                isFocused
                    ? <SearchInputWithSuggestion {...{ searchInput, recentSearches, changeHandler, blurHandler }} />
                    : null
            }
        </React.Fragment>
    );
}

export default Search;