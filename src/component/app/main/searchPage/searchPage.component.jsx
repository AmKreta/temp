import React, { useState } from 'react';
import './searchPage.styles.scss';

//importing components
import Search from './search/search.component';
import Filter from './filter/filter.component';
import Result from './result/result.component';

const SearchPage = ({ location }) => {

    const [searchInput, setSearchInput] = useState('');
    const [filter, setFilter] = useState(null);       //to show result based on custom filter
    const [showOnly, setShowOnly] = useState('All');  //to show results from one of doctor,hospital,pharmacy,lab
    const [results, setResults] = useState([]);

    return (
        <div className="searchPage">
            <Search {...{ searchInput, setSearchInput }} />
            <Filter {...{ searchInput, setFilter, showOnly, setShowOnly }} />
            <Result {...{ results }} />
        </div>
    );
}


export default SearchPage;