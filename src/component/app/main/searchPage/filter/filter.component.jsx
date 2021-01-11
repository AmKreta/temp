import React, { useState, useCallback } from 'react';
import './filter.styles.scss';

import CustomFilter from './customFilter/customFilter.cmponent';

//importing icon
import { FaFilter } from 'react-icons/fa';

//reusable component
import Icon from '../../../../reusableComponent/icon/icon.component';

const FilterItem = ({ label, highlight, showOnly, setShowOnly }) => {

    const setFilter = useCallback(() => {
        setShowOnly(label);
    }, [setShowOnly]);

    return (
        <div className="filterItem" onClick={setFilter} >
            <div className={`filterLabel ${showOnly === label ? 'active' : null}`}>
                <p>{label}</p>
            </div>
            {
                highlight
                    ? <div className='highlight'>
                        <p>{highlight}</p>
                    </div>
                    : null
            }
        </div>
    );
}

const Filter = ({ setFilter, showOnly, setShowOnly, searchInput }) => {

    const [showCustomFilterModal, setShowCustomFilterModal] = useState(false);

    const toggleCustomFilterModal = useCallback(() => {
        setShowCustomFilterModal(prevState => !prevState);
    }, [setShowCustomFilterModal]);

    return (
        <div className="filter">
            <FilterItem label={'All'}  {...{ showOnly, setShowOnly }} />
            <FilterItem label={'Hospitals'} highlight={4}  {...{ showOnly, setShowOnly }} />
            <FilterItem label={'Doctors'} highlight={7} {...{ showOnly, setShowOnly }} />
            <FilterItem label={'Pharmacy'} highlight={8} {...{ showOnly, setShowOnly }} />
            <FilterItem label={'Diagonstics'} highlight={12} {...{ showOnly, setShowOnly }} />
            {
                searchInput !== ''
                    ? <div className="customFilterButton">
                        <Icon size='12px' onClick={toggleCustomFilterModal}>
                            <FaFilter />
                        </Icon>
                        <p>
                            Filter
                        </p>
                    </div>
                    : null
            }
            {
                showCustomFilterModal
                    ? <CustomFilter {...{ setFilter, toggleCustomFilterModal }} />
                    : null
            }
        </div >
    );
}

export default Filter;