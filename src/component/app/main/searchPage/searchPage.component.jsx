import React, { useState } from 'react';
import './searchPage.styles.scss';

//importing components
import Search from './search/search.component';
import Filter from './filter/filter.component';
import Result from './result/result.component';

const SearchPage = ({ location }) => {

    const [results, setResults] = useState([]);

    return (
        <div className="searchPage">
            <Search />
            <Filter />
            <Result {...{ results }} />
        </div>
    );
}


export default SearchPage;