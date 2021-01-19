import React, { useRef, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import './customFilter.styles.scss';

//reusable component
import InputWithIcon from '../../../../../reusableComponent/InputwithIcon/inputWithIcon.component';
import PrimaryButton from '../../../../../reusableComponent/primaryButton.component';
import Icon from '../../../../../reusableComponent/icon/icon.component';
import { AiOutlineClose } from 'react-icons/ai';

//importing actions
import { setSearchFilterLocation, setSearchFilterSpeciality } from '../../../../../../actions/action';

const CustomFilter = ({ filter, setSearchFilterLocation, setSearchFilterSpeciality, toggleCustomFilterModal }) => {
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
        /*if () {
            setSearchFilterLocation(input);
        }
        else {
            setSearchFilterSpeciality(input);
        }*/
        console.log('setFilter');
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

const mapStateToProps = state => ({
    filter: state.search.filter //{location:bool,speciality:bool,value:any}
});

const mapDispatchToProps = dispatch => ({
    setSearchFilterLocation: location => dispatch(setSearchFilterLocation(location)),
    setSearchFilterSpeciality: speciality => dispatch(setSearchFilterSpeciality(speciality))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomFilter);