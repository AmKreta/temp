import React from 'react';
import './search.styles.scss';

//reusable component
import InputWithIcon from '../../../../reusableComponent/InputwithIcon/inputWithIcon.component';

const Search = () => {
    return (
        <div className="search">
            <div className="searchInput">
                <InputWithIcon />
                <div className="searchButtonContainer">
                    <button type='button'>ReOrder</button>
                </div>
            </div>
            <div className="recentSearch">
                <div>
                    <p>Recent Search:-</p>
                    <p>abc</p>
                    <p>abc</p>
                    <p>abc</p>
                </div>
            </div>
        </div>
    );
}

export default Search;