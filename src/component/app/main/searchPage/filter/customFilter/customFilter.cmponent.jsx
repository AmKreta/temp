import React, { useRef, useEffect, useState, useCallback } from 'react';
import './customFilter.styles.scss';

//reusable component
import InputWithIcon from '../../../../../reusableComponent/InputwithIcon/inputWithIcon.component';
import PrimaryButton from '../../../../../reusableComponent/primaryButton.component';
import Icon from '../../../../../reusableComponent/icon/icon.component';
import { AiOutlineClose } from 'react-icons/ai';

const CustomFilter = ({ setFilter, toggleCustomFilterModal }) => {
    const customFilterRef = useRef();

    useEffect(() => {
        customFilterRef.current.style.height = window.screen.height + 'px';
        customFilterRef.current.style.width = window.innerWidth + 'px';
    }, []);

    const [input, setInput] = useState('');

    const setInputValue = useCallback((e) => {
        setInput(e.target.value);
    }, [setInput]);

    const setFliters = () => {
        setFilter(input);
    }

    return (
        <div className="customFilterContainer" ref={customFilterRef}>
            <div className="customFilter">
                <div className="closeIcon">
                    <Icon onClick={toggleCustomFilterModal}>
                        <AiOutlineClose />
                    </Icon>
                </div>
                <h3>Filter</h3>
                <div className="filterBy">
                    <p>Filter By</p>
                    <div>
                        <input type='radio' name='filterBy' value='speciality' checked /><span>Specialit</span>
                    </div>
                    <div>
                        <input type='radio' name='filterBy' value='area' /><span>Area</span>
                    </div>
                </div>
                <InputWithIcon placeHolder='search' value={input} onChange={setInputValue} />
                <input disabled />
                <input disabled />
                <PrimaryButton label='ok' onClick={() => { setFliters(); toggleCustomFilterModal(); }} />

            </div>
        </div>
    );
}

export default CustomFilter;