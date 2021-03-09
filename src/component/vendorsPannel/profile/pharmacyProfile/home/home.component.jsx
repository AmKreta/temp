import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './home.styles.scss';

///importing jss
import { blue } from '../../../../../assets/globalJSS';

import xlsx from 'xlsx';

//importing services 
import { GET_PRODUCTS, ADD_BULK_PRODUCTS } from '../../../../../services/services';

//importing reusable components
import InfoCard from '../../../../reusableComponent/infoCard/infoCard.component.';
import Icon from '../../../../reusableComponent/icon/icon.component';
import ProductAndTestListing from '../../../../reusableComponent/productAndTestListing/productAndTestListing.component';
import RegistrationFormButton from '../../../../reusableComponent/registrationFormButton/registrationFormButton.component';

//importing icon
import { MdLocalOffer } from 'react-icons/md';
import { FaUpload } from 'react-icons/fa';

//importing custom components
import AddProducts from './addProducts/addProducts.component';

const Home = () => {
    const currentVendor = useSelector(state => state.currentVendor);
    const auth_token = useSelector(state => state.token);
    const [productCategories, setProductCategories] = useState([]); //product categoriees is list of products
    const [showAddProducts, setShowAddProducts] = useState(false);
    const [productsAdded, setProductsAdded] = useState(false);
    //const [excelData, setExcelData] = useState(null);
    const excelUploadInputRef = useRef(null);
    const productContainerRef = useRef(null);

    useEffect(() => {
        let a = null;
        if (productContainerRef.current) {
            a = productContainerRef.current;
            const onWheelHandler = (e) => {
                e.preventDefault();
                productContainerRef.current.scrollLeft += e.deltaY * 10;
            }
            productContainerRef.current.addEventListener('wheel', onWheelHandler, { passive: false });
            return () => a && a.removeEventListener('wheel', onWheelHandler);
        }
    }, [productContainerRef.current]);

    const changeHandler = (e) => {
        //setExcelData(e.target.files[0]);
        //upload excel

        let fileReader = new FileReader();
        fileReader.readAsBinaryString(e.target.files[0]);
        fileReader.onload = (event) => {
            let data = event.target.result;
            let workBook = xlsx.read(data, { type: 'binary' });
            let result = [];
            workBook.SheetNames.forEach(sheet => {
                result.push(xlsx.utils.sheet_to_row_object_array(workBook.Sheets[sheet]));
            });
            axios
                .post(ADD_BULK_PRODUCTS, result[0], {
                    headers: {
                        'Authorization': `Bearer ${auth_token.accessToken}`
                    }
                })
                .then(res => {
                    setProductsAdded(true);
                    setProductCategories(prevState => [...prevState, ...res.data.payload]);
                })
                .catch(err => {
                    console.log(err);
                    alert('cant add tests in bulk');
                });
        };
    }


    useEffect(() => {
        axios
            .get(GET_PRODUCTS, {
                headers: {
                    'Authorization': `Bearer ${auth_token.accessToken}`
                }
            })
            .then(res => {
                setProductCategories(res.data.payload);
            })
            .catch(err => {
                alert("can't fetch products categories");
                console.log(err);
            })
    }, [setProductCategories]);

    return (
        <div className="vendorHome">
            {
                productsAdded && (
                    <div className="productsAddedPopupContainer">
                        <div className="productsAdded">
                            <p>Products from excel Sheet added sucessfully.</p>
                            <button className='greenButton' onClick={(e) => setProductsAdded(false)}>Ok</button>
                        </div>
                    </div>
                )
            }
            <div className="infoContainer">
                <InfoCard data={currentVendor} large />
            </div>
            <div className="vendorProductListContainer">
                <div className="vendorProductListHeader">
                    <Icon iconColor={blue}>
                        <MdLocalOffer />
                    </Icon>
                    <p>Products</p>
                </div>
                <div className="vendorProductList" ref={productContainerRef}>
                    {
                        productCategories.map((item, index) => <ProductAndTestListing {...item} key={item._id} />)
                    }
                </div>
            </div>
            <div className="VendorHomePageButton">
                <button className="greenButton" onClick={(e) => { setShowAddProducts(true) }}>Add Products</button>
            </div>
            <div className="vendorHomeUploadExcel">
                <RegistrationFormButton
                    icon1={<FaUpload />}
                    label={[<p>Or upload closing stock excel to Mediseen Whatsaap</p>]}
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
                showAddProducts ? <AddProducts {...{ setShowAddProducts, setProductCategories }} /> : null
            }
        </div>
    );
}

export default Home;
