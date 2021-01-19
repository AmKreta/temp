import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import './filter.styles.scss';

//importing actions
import { setSearchCategory, setSearchFilterLocation, setSearchFilterSpeciality } from '../../../../../actions/action';
//importing categories
import { HOSPITAL, PHARMACY, PATHOLOGY, DOCTOR } from '../../categories';
//custom components
import CustomFilter from './customFilter/customFilter.cmponent';
//importing icon
import { FaFilter } from 'react-icons/fa';
//reusable component
import Icon from '../../../../reusableComponent/icon/icon.component';

const FilterItem = ({ label, highlight, category, setSearchCategory }) => {

    return (
        <Link to={`/home/search/${label}`}>
            <div className="filterItem" onClick={(e) => setSearchCategory(label)}>
                <div className={`filterLabel ${category === label ? 'active' : null}`}>
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
        </Link>
    );
}

const Filter = ({ match, setSearchCategory, category, query }) => {

    const [showCustomFilterModal, setShowCustomFilterModal] = useState(false);

    const toggleCustomFilterModal = useCallback(() => {
        setShowCustomFilterModal(prevState => !prevState);
    }, [setShowCustomFilterModal]);

    useEffect(() => {
        setSearchCategory(match.url.split('/').slice(-2)[0]);
    }, []);

    return (
        <div className="filter">
            <FilterItem label={'All'} />
            <FilterItem label={HOSPITAL} highlight={4}  {...{ category, setSearchCategory }} />
            <FilterItem label={DOCTOR} highlight={7} {...{ category, setSearchCategory }} />
            <FilterItem label={PHARMACY} highlight={8} {...{ category, setSearchCategory }} />
            <FilterItem label={PATHOLOGY} highlight={12} {...{ category, setSearchCategory }} />
            {
                query !== ''
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
                    ? <CustomFilter toggleCustomFilterModal={toggleCustomFilterModal} />
                    : null
            }
        </div >
    );
}

const mapStateToprops = state => ({
    category: state.search.category,
    query: state.search.query
});

const mapDispatchToProps = dispatch => ({
    setSearchCategory: val => dispatch(setSearchCategory(val)),
});

export default connect(mapStateToprops, mapDispatchToProps)(withRouter(Filter));