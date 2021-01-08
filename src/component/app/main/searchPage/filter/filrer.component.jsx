import React from 'react';
import './filter.styles.scss';

const FilterItem = ({ label, highlight }) => {
    return (
        <div className='filterItem'>
            <div className="filterLabel">
                <p>{label}</p>
            </div>
            <div className='highlight'>
                <p>{highlight}</p>
            </div>
        </div>
    );
}

const Filter = () => {
    return (
        <div className="filter">
            <FilterItem label={'Hospitals'} highlight={4} />
            <FilterItem label={'Doctors'} highlight={7} />
            <FilterItem label={'Pharmacy'} highlight={8} />
            <FilterItem label={'Diagonstics'} highlight={12} />
        </div>
    );
}

export default Filter;