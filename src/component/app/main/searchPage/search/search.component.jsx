import React, { useState, useCallback } from 'react';
import './search.styles.scss';

import SearchInput from './searchInput/searchInput.component';
import SearchInputWithSuggestion from './searchInputWithSuggestion/searchInputWithSuggestion.component';

const Search = () => {

    const [isFocused, setIsFocused] = useState(false);
    const [recentSearches, setRecentSearches] = useState(['abc', 'abc', 'abc']);

    const focusHandler = useCallback((e) => {
        setIsFocused(true);
    }, []);

    const blurHandler = useCallback((e) => {
        setIsFocused(false);
    }, []);


    return (
        <React.Fragment>
            <SearchInput {...{ recentSearches, focusHandler }} />
            {
                isFocused
                    ? <SearchInputWithSuggestion {...{ recentSearches, blurHandler }} />
                    : null
            }
        </React.Fragment>
    );
}

export default Search;