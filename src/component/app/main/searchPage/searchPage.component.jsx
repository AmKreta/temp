import React from 'react';
import './searchPage.styles.scss';

//importing components
import Search from './search/search.component';
import Filter from './filter/filrer.component';
import Result from './result/result.component';

const SearchPage = ({ location }) => {
    return (
        <div className="searchPage">
            <Search />
            <Filter />
            <Result />
        </div>
    );
}


export default SearchPage;