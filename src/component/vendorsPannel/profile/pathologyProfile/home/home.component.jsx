import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './home.styles.scss';

//importing jss
import { blue } from '../../../../../assets/globalJSS';

//importing services 
import { GET_TEST_CATEGORY } from '../../../../../services/services';

//importing reusable components
import InfoCard from '../../../../reusableComponent/infoCard/infoCard.component.';

//importing reusable component
import Icon from '../../../../reusableComponent/icon/icon.component';

//importing icon
import { MdLocalOffer } from 'react-icons/md';

const TestsAndProductsListing = ({ label, value }) => {
    return (
        <div className="vendorTestAndProductListItem">
            <div className="vendorTestAndProductListItemHeader">
                <div className="vendorTestAndProductListItemHeaderCount">
                    count
                </div>
                <div className="vendorTestAndProductListItemHeaderLabel">
                    label
                </div>
            </div>
        </div>
    );
}

const Home = () => {
    const currentVendor = useSelector(state => state.currentVendor);
    const [testCategories, setTestCategories] = useState([]);

    useEffect(() => {
        axios
            .get(GET_TEST_CATEGORY)
            .then(res => {
                setTestCategories(res.data.payload);
            })
            .catch(err => {
                alert("unable to fetch test categories");
                console.log(err);
            });
    }, []);

    return (
        <div className="vendorHome">
            <div className="infoContainer">
                <InfoCard data={currentVendor} large />
            </div>
            <div className="vendorTestListContainer">
                <div className="vendorTestListHeader">
                    <Icon iconColor={blue}>
                        <MdLocalOffer />
                    </Icon>
                    <p>Offers</p>
                </div>
                <div className="vendorTestList" onWheel={(e) => { e.preventDefault(); e.stopPropagation(); e.target.scrollLeft += parseInt(e.deltaY); console.log(e.deltaY + e.target.scrollLeft); }}>
                    {
                        testCategories.map(item => <TestsAndProductsListing {...item} key={item._id} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Home;