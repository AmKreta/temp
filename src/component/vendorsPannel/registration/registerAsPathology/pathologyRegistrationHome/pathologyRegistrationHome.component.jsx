import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './pathologyRegistrationHome.styles.scss';

//importing icons
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { BiWallet } from 'react-icons/bi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import { MdCheckCircle } from 'react-icons/md';

//importing reusable components
import RegistrationFormButton from '../../../../reusableComponent/registrationFormButton/registrationFormButton.component';

//importing routes
import { ADD_TIMINGS, COLLECTION_SETTING, ADD_TESTS } from '../../routes';

//importing services
import { GET_TEST_AND_PRODUCTS } from '../../../../../services/services';

//importing actions
import { setProductsAndTestList } from '../../../../../actions/action';

const PathologyRegistrationHome = ({ history, match, currentVendor, auth_token, tests, setProductsAndTestList }) => {
    useEffect(() => {
        axios
            .get(GET_TEST_AND_PRODUCTS, {
                headers: {
                    'Authorization': `Bearer ${auth_token.accessToken}`
                }
            })
            .then(res => {
                setProductsAndTestList(res.data.payload);
            })
            .catch(err => {
                console.log(err);
                alert(`can't fetch products details`);
            })
    }, [auth_token.accessToken, setProductsAndTestList]);
    return (
        <div className="pathologyRegistrationHome">
            <div>
                <h4>information about your business</h4>
                <RegistrationFormButton
                    icon1={<AiOutlineClockCircle />}
                    label={[<p>Add Timing And Staff</p>]}
                    icon2={
                        currentVendor.staffs && currentVendor.workingHours
                            ? <MdCheckCircle />
                            : < GoPlus />
                    }
                    translucent={
                        currentVendor.staffs && currentVendor.workingHours
                            ? false
                            : true
                    }
                    onClick={(e) => history.push(`${match.url}/${ADD_TIMINGS}/`)}
                />
                <RegistrationFormButton
                    icon1={<BsFillPeopleFill />}
                    label={[<p>Collection & Payment Setting</p>]}
                    icon2={
                        currentVendor.collections && currentVendor.payment
                            ? <MdCheckCircle />
                            : < GoPlus />
                    }
                    translucent={
                        currentVendor.collections && currentVendor.payment
                            ? false
                            : true
                    }
                    onClick={(e) => history.push(`${match.url}/${COLLECTION_SETTING}/`)}
                />
                <RegistrationFormButton
                    icon1={<BiWallet />}
                    label={[<p>Add Or Import Test</p>]}
                    icon2={
                        tests.length
                            ? <MdCheckCircle />
                            : <GoPlus />
                    }
                    translucent={
                        tests.length
                            ? false
                            : true
                    }
                    onClick={(e) => history.push(`${match.url}/${ADD_TESTS}/`)}
                />
            </div>
            <div>
                <RegistrationFormButton
                    icon1={<IoLogoWhatsapp />}
                    label={[<p>If You Are facing Problems Chat With Us</p>]}
                />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    currentVendor: state.currentVendor,
    auth_token: state.token,
    tests: state.myProductsAndTests
});

const mapDispatchtoprops = dispatch => ({
    setProductsAndTestList: (payload) => dispatch(setProductsAndTestList(payload))
});

export default connect(mapStateToProps, mapDispatchtoprops)(PathologyRegistrationHome);