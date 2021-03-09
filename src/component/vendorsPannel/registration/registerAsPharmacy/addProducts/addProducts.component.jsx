import React, { useRef, useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './addProducts.styles.scss';

//importing reusable components
import Icon from '../../../../reusableComponent/icon/icon.component';

//importing icons
import { IoMdBarcode } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';
import { ImUpload3 } from 'react-icons/im';
import { BiRupee } from 'react-icons/bi';

//importing jss
import { lightBlue } from '../../../../../assets/globalJSS';

//importing services
import { ADD_PRODUCTS, UPLOAD_FILE } from '../../../../../services/services';

//importing actions
import { setCurrentVendor, setProductsAndTestList } from '../../../../../actions/action';

//importing custom components
import UploadedImagesPreview from '../../uploadedImagePreview/uploadedImagesPreview.component';

const AddProducts = (props) => {

    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        setCategory(['anti-biotic', 'anti-inflammatory', 'enzyme', 'tonic', 'anti-septic']);
        setType(['liquid', 'tablet', 'injection', 'inhaler', 'cream']);
    }, []);

    const initialState = {
        images: [],
        name: '',
        category: 'anti-biotic',
        mrp: '',
        sellingPrice: '',
        quantity: '',
        type: 'liquid',
        productDetails: '',
        company: '',
        barcode: ''
    };
    const [data, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'setImages':
                let imageArray = [];
                Object.keys(action.payload).forEach(item => {
                    imageArray.push(action.payload[item]);
                });
                return { ...state, images: imageArray };
            //return { ...state, images: [...state.images, action.payload] };
            case 'setName':
                return { ...state, name: action.payload };
            case 'setCategory':
                return { ...state, category: action.payload };
            case 'setMrp':
                return { ...state, mrp: action.payload };
            case 'setSellingPrice':
                return { ...state, sellingPrice: action.payload };
            case 'setQuantity':
                return { ...state, quantity: action.payload };
            case 'setType':
                return { ...state, type: action.payload };
            case 'setProductDetails':
                return { ...state, productDetails: action.payload };
            case 'setCompany':
                return { ...state, company: action.payload };
            case 'setBarcode':
                return { ...state, barcode: action.payload };
            default:
                return state;
        }
    }, initialState);

    const inputContainerRef = useRef(null);
    const imageInputRef = useRef(null);

    const onFocus = (e) => {
        inputContainerRef.current.classList.add('focused');
    }

    const onBlur = (e) => {
        inputContainerRef.current.classList.remove('focused');
    }

    const addTestSubmit = (e) => {

        setUploading(true);

        const imagesArray = data.images;
        console.log(imagesArray);

        let formData = new FormData();
        formData.append('file', imagesArray[0]);

        axios
            .post(UPLOAD_FILE, formData, {
                headers: {
                    'Authorization': `Bearer ${props.auth_token.accessToken}`,
                    'Content-type': 'multipart/form-data'
                }
            })
            .then(response => {
                //console.log(response.data.payload);
                var Data = {
                    image: response.data.payload.location,
                    name: data.name,
                    category: 'pharmacy',
                    role: data.category,
                    mrp: data.mrp,
                    sellingPrice: data.sellingPrice,
                    qty: data.quantity,
                    qtyType: data.type,
                    details: data.productDetails,
                    company: data.company,
                    barcode: data.barcode
                };

                axios
                    .post(ADD_PRODUCTS, Data, {
                        headers: {
                            'Authorization': `Bearer ${props.auth_token.accessToken}`
                        }
                    })
                    .then(res => {
                        setUploading(false);

                        props.setProductsAndTestList(res.data.payload);

                        if (props.setShowAddProducts) {
                            //ie rendered inside pharmacy home
                            props.setProductCategories(prevState => [...prevState, res.data.payload]); //product categories is list of products
                            props.setShowAddProducts(false);
                        }
                        else {
                            //ie rendered inside pharmacy registration
                            props.history.goBack();
                        }
                    })
                    .catch(err => {
                        setUploading(false);
                        console.log(err);
                        alert('something went wrong');
                    });
            })
            .catch(err => {
                setUploading(false);
                console.log(err);
                alert('file not uploaded');
            });
    }

    return (
        <div className="addProductsAndTest">
            <div className="addProductsAndTestHeader">
                <div className="addProductsAndTestSearch" ref={inputContainerRef}>
                    <input type="text" onFocus={onFocus} onBlur={onBlur} />
                    <Icon iconColor={lightBlue} size='20px'>
                        <BiSearch />
                    </Icon>
                </div>
                <div className="addProductsAndTestBarCode">
                    <Icon size='25px' noRippleEffect>
                        <IoMdBarcode />
                    </Icon>
                    <p>Or Scan Barcode</p>
                </div>
            </div>
            <div className="addImagesContainer">
                <div className="addImages">
                    <div className="addImagesIconContainer">
                        <Icon onClick={(e) => imageInputRef.current.click()} noRippleEffect iconColor='grey' size='40px'>
                            <AiOutlineCamera />
                        </Icon>
                        <input
                            type='file'
                            multiple="multiple"
                            style={{ display: 'none' }}
                            ref={imageInputRef}
                            onChange={(e) => dispatch({ type: 'setImages', payload: e.target.files })}
                        />
                    </div>
                    <div className="addImagesCaption">
                        {
                            data.images.length
                                ? <p>Change Images</p>
                                : <>
                                    <p>Add Images</p>
                                    <p>(Upto 3 images)</p>
                                </>
                        }
                    </div>
                </div>
                <UploadedImagesPreview imagesArray={data.images} />
            </div>
            <div className="addProductsAndTestInputContainer">
                <div className="testName addProductsAndTestInput">
                    <input
                        type='text'
                        placeholder='product name'
                        value={data.name}
                        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
                    />
                </div>
                <div className="selectTest addProductsAndTestInput selectInputContainer selectCategory">
                    <div>
                        <div className='selectInputCaption'>
                            <p>{/*data.category*/}</p>
                        </div>
                        <div className='selectInput'>
                            <select onChange={(e) => dispatch({ type: 'setCategory', payload: e.target.value })}>
                                {
                                    category.map((item, index) => <option key={index} value={item}>{item}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    {/*<div>
                        add
                    </div>*/}
                </div>
                <div className="price flexInputContainer">
                    <div className="mrp addProductsAndTestInput rupeeInout">
                        <Icon noRippleEffect size='15px' >
                            <BiRupee />
                        </Icon>
                        <input
                            type='text'
                            placeholder='mrp'
                            value={data.mrp}
                            onChange={(e) => dispatch({ type: 'setMrp', payload: e.target.value })}
                        />
                    </div>
                    <div className="sellingPrice addProductsAndTestInput rupeeInout">
                        <Icon noRippleEffect size='15px' >
                            <BiRupee />
                        </Icon>
                        <input
                            type='text'
                            placeholder='selling price'
                            value={data.sellingPrice}
                            onChange={(e) => dispatch({ type: 'setSellingPrice', payload: e.target.value })}
                        />
                    </div>
                </div>
                <div className="tests flexInputContainer">
                    <div className="ten addProductsAndTestInput">
                        <input
                            type='number'
                            placeholder='quantity'
                            value={data.quantity}
                            onChange={(e) => dispatch({ type: 'setQuantity', payload: e.target.value })}
                        />
                    </div>
                    <div className="selectTest addProductsAndTestInput selectInputContainer">
                        <div className='selectInputCaption'>
                            <p>{/*data.type*/}</p>
                        </div>
                        <div className='selectInput'>
                            <select onChange={(e) => dispatch({ type: 'setType', payload: e.target.value })}>
                                {
                                    type.map((item, index) => <option key={index} value={item}>{item}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="productDetail addProductsAndTestInput">
                    <input
                        type='text'
                        placeholder='Product Details'
                        value={data.productDetails}
                        onChange={(e) => dispatch({ type: 'setProductDetails', payload: e.target.value })}
                    />
                </div>
                <div className="company addProductsAndTestInput">
                    <input
                        type='text'
                        placeholder='company'
                        value={data.company}
                        onChange={(e) => dispatch({ type: 'setCompany', payload: e.target.value })}
                    />
                </div>
                <div className="barcode addProductsAndTestInput">
                    <input
                        type='text'
                        placeholder='barcode'
                        value={data.barcode}
                        onChange={(e) => dispatch({ type: 'setBarcode', payload: e.target.value })}
                    />
                </div>
            </div>
            <div className="Button">
                {
                    props.setShowAddProducts
                        ? <button className='whiteButton' onClick={(e) => props.setShowAddProducts(false)}>Cancel</button>
                        : null
                }
                <button className='greenButton' onClick={addTestSubmit}>Add Test</button>
            </div>
            {
                props.setShowAddProducts
                    ? null
                    : <div className="uploadtestList">
                        <div>
                            <Icon iconColor='white' size='2em'>
                                <ImUpload3 />
                            </Icon>
                        </div>
                        <div>
                            <p>or Upload test list excel to Mediseen Whatsaap</p>
                        </div>
                    </div>
            }
            {
                uploading
                    ? <div className="uploadingSpinner">
                        <div />
                    </div>
                    : null
            }
        </div >
    );
}

const mapStateToProps = state => ({
    currentVendor: state.currentVendor,
    auth_token: state.token
});

const mapDispatchToprops = dispatch => ({
    setCurrentVendor: (payload) => dispatch(setCurrentVendor(payload)),
    setProductsAndTestList: (payload) => dispatch(setProductsAndTestList(payload))
});

export default connect(mapStateToProps, mapDispatchToprops)(AddProducts);