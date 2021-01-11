import React from 'react';
import './searchInput.styles.scss';

//reusable component
import InputWithIcon from '../../../../../reusableComponent/InputwithIcon/inputWithIcon.component';

const SearchInput = ({ searchInput, focusHandler, recentSearches }) => {
    return (
        <div className="search">
            <div className="searchInput">
                <InputWithIcon
                    width='80%'
                    padding='0 2%'
                    value={searchInput}
                    onFocus={focusHandler}
                    height='100%'
                    onChange={() => { }}
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

export default SearchInput;