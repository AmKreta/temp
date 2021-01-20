import React, { useState } from 'react';
import './searchPage.styles.scss';

//importing components
import Search from './search/search.component';
import Filter from './filter/filter.component';
import Result from './result/result.component';

const SearchPage = () => {

    return (
        <div className="searchPage">
            <Search />
            <Filter />
            <Result />
        </div>
    );
}


export default SearchPage;