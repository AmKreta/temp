import React, { useEffect, useRef } from 'react';
import './searchInputWithSuggestion.styles.scss';

import { AiOutlineClose } from 'react-icons/ai';
import { BiArrowBack } from 'react-icons/bi';

//reusable component
import Icon from '../../../../../reusableComponent/icon/icon.component';

const SearchInputWithSuggestion = ({ recentSearches, searchInput, changeHandler, blurHandler }) => {
    const inputRef = useRef(null);

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
                        <BiArrowBack />
                    </Icon>
                    <input value={searchInput} onChange={changeHandler} ref={inputRef} />
                    <Icon onClick={blurHandler}>
                        <AiOutlineClose />
                    </Icon>
                </div>

                <div className="recentSearch">
                    <p>Recent Search</p>
                    {
                        recentSearches.map((item, index) => <p key={index}>{item}</p>)
                    }
                </div>

                <div className="suggestions">
                    <p>Suggestion</p>
                    {
                        recentSearches.map((item, index) => <p key={index}>{item}</p>)
                    }
                </div>

            </div>
        </div>
    );
}

export default SearchInputWithSuggestion; 