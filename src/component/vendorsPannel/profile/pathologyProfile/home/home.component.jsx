import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './home.styles.scss';
import { toast } from 'react-toastify';

import xlsx from 'xlsx';

//importing jss
import { blue } from '../../../../../assets/globalJSS';

//importing services 
import { GET_TESTS, ADD_BULK_TEST } from '../../../../../services/services';

//importing reusable components
import InfoCard from '../../../../reusableComponent/infoCard/infoCard.component.';
import Icon from '../../../../reusableComponent/icon/icon.component';
import ProductAndTestListing from '../../../../reusableComponent/productAndTestListing/productAndTestListing.component';
import RegistrationFormButton from '../../../../reusableComponent/registrationFormButton/registrationFormButton.component';

//importing icon
import { MdLocalOffer } from 'react-icons/md';
import { FaUpload } from 'react-icons/fa';

//importing custom components
import AddTest from './addTest/addTest.component';

const Home = () => {
    const currentVendor = useSelector(state => state.currentVendor);
    const auth_token = useSelector(state => state.token);
    const [testCategories, setTestCategories] = useState([]); //test categories is list og test
    const [showAddTests, setShowAddTests] = useState(false);
    const [testsAdded, setTestsAdded] = useState(false);
    //const [excelData, setExcelData] = useState(null);
    const excelUploadInputRef = useRef(null);
    const testListRef = useRef(null);

    useEffect(() => {
        let a = null;
        if (testListRef.current) {
            a = testListRef.current;
            const onWheelHandler = (e) => {
                e.preventDefault();
                testListRef.current.scrollLeft += e.deltaY * 20;
            }
            testListRef.current.addEventListener('wheel', onWheelHandler, { passive: false });
            return () => a && a.removeEventListener('wheel', onWheelHandler);
        }
    }, [testListRef.current]);

    const changeHandler = (e) => {
        //setExcelData(e.target.files[0]);
        //UPLOAD EXCELL SHEET
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(e.target.files[0]);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workBook = xlsx.read(data, { type: 'binary' });
            let result = [];
            //console.log(workBook);
            workBook.SheetNames.forEach(sheet => {
                result.push(xlsx.utils.sheet_to_row_object_array(workBook.Sheets[sheet]));
            });
            //console.log(result[0]);
            axios
                .post(ADD_BULK_TEST, result[0], {
                    headers: {
                        'Authorization': `Bearer ${auth_token.accessToken}`
                    }
                })
                .then(res => {
                    setTestsAdded(true);
                    setTestCategories(prevState => [...prevState, ...res.data.payload]);

                })
                .catch(err => {
                    console.log(err);
                    alert('cant add tests in bulk');
                });
        };
    }

    useEffect(() => {
        axios
            .get(GET_TESTS, {
                headers: {
                    'Authorization': `Bearer ${auth_token.accessToken}`
                }
            })
            .then(res => {
                setTestCategories(res.data.payload);
            })
            .catch(err => {
                alert("unable to fetch test categories");
                console.log(err);
            });
    }, [setTestCategories]);

    return (
        <div className="vendorHome">
            {
                testsAdded && (
                    <div className="testsAddedPopupContainer">
                        <div className="testsAdded">
                            <p>tests from excel Sheet added sucessfully.</p>
                            <button className='greenButton' onClick={(e) => setTestsAdded(false)}>Ok</button>
                        </div>
                    </div>
                )
            }
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
                <div className="vendorTestList" ref={testListRef}>
                    {
                        testCategories.map(item => <ProductAndTestListing {...item} key={item._id} />)
                    }
                </div>
            </div>
            <div className="VendorHomePageButton">
                <button className="greenButton" onClick={(e) => { setShowAddTests(true) }}>Add Tests</button>
            </div>
            <div className="vendorHomeUploadExcel">
                <RegistrationFormButton
                    icon1={<FaUpload />}
                    label={[<p>Or upload test list excel to Mediseen Whatsaap</p>]}
                    onClick={(e) => { excelUploadInputRef.current.click(); }}
                />
                <input
                    type='file'
                    //accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    style={{ display: 'none' }}
                    ref={excelUploadInputRef}
                    onChange={changeHandler}
                />
            </div>
            {
                showAddTests ? <AddTest {...{ setShowAddTests, setTestCategories }} /> : null
            }
        </div>
    );
}

export default Home;
