import React, { useRef, useState, useEffect, useReducer } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import './addTest.styles.scss';

//importing reusable components
import Icon from '../../../../reusableComponent/icon/icon.component';

//importing icons
import { IoMdBarcode } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';

//importing jss
import { lightBlue } from '../../../../../assets/globalJSS';

//importing services
import { ADD_TEST_AND_PRODUCTS} from '../../../../../services/services';

//importing actions
import { setCurrentVendor,setProductsAndTestList } from '../../../../../actions/action';

const AddTests = (props) => {

    const [category, setCategory] = useState([]);
    const [type, setType] = useState([]);
    const initialState = {
        image: [],
        name: '',
        category: 'Choose Category',
        mrp: '',
        sellingPrice: '',
        testDetails: '',
        quantity: '0',
        type: 'tablet',
        fastingRequired: false
    };
    const [data, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'addImage':
                let imageArray = [];
                Object.keys(action.payload).forEach(item => {
                    imageArray.push(action.payload[item]);
                });
                return { ...state, image: imageArray };
            case 'setName':
                return { ...state, name: action.payload };
            case 'setCategory':
                return { ...state, category: action.payload };
            case 'setQuantity':
                return { ...state, quantity: action.payload };
            case 'setType':
                return { ...state, type: action.payload };
            case 'setMrp':
                return { ...state, mrp: action.payload };
            case 'setSellingPrice':
                return { ...state, sellingPrice: action.payload };
            case 'setTestDetails':
                return { ...state, testDetails: action.payload };
            case 'setFastingRequired':
                return { ...state, fastingRequired: action.payload }
            default:
                return state;
        }
    }, initialState);

    const addButtonhandler = (e) => {
        var Data = {
            image: 'amk',
            name: data.name,
            mrp: data.mrp,
            sellingPrice: data.sellingPrice,
            details: data.testDetails,
            qty: data.quantity,
            fastingRequired: data.fastingRequired,
            category: data.category,
            qtyType: data.type
        }
        /*let formData = new FormData();
        Object.keys(Data).forEach(item => {
            if (item === 'image') {
                Data[item].forEach(image => {
                    formData.append('image', image);
                })
            }
            else {
                formData.append(item, Data[item]);
            }
        });*/

        axios
            .post(ADD_TEST_AND_PRODUCTS, Data, {
                headers: {
                    'Authorization': `Bearer ${props.auth_token.accessToken}`,  
                }
            })
            .then(res => {
                props.setProductsAndTestList(res.data.payload);
                props.history.goBack();
            })
            .catch(err => {
                console.log(err);
                alert('something went wrong');
            })
    }

    useEffect(() => {
        setCategory(['a', 'b', 'c']);
        setType(['a', 'b', 'c', 'd']);
    }, [])

    const inputContainerRef = useRef(null);
    const imageInputRef = useRef(null);

    const onFocus = (e) => {
        inputContainerRef.current.classList.add('focused');
    }

    const onBlur = (e) => {
        inputContainerRef.current.classList.remove('focused');
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
                        onChange={(e) => dispatch({ type: 'addImage', payload: e.target.files })}
                    />
                </div>
                <div className="addImagesCaption">
                    <p>Add Images</p>
                    <p>(Upto 3 images)</p>
                </div>
            </div>
            <div className="addProductsAndTestInputContainer">
                <div className="testName addProductsAndTestInput">
                    <input
                        type='text'
                        placeholder='Test Name'
                        value={data.name}
                        onChange={(e) => dispatch({ type: 'setName', payload: e.target.value })}
                    />
                </div>
                <div className="selectTest addProductsAndTestInput selectInputContainer">
                    <div className='selectInputCaption'>
                        <p>{data.category}</p>
                    </div>
                    <div className='selectInput'>
                        <select onChange={(e) => dispatch({ type: 'setCategory', payload: e.target.value })}>
                            {
                                category.map((item, index) => <option key={index} value={item}>{item}</option>)
                            }
                        </select>
                    </div>
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
                    <div className="quantity addProductsAndTestInput">
                        <input
                            type='text'
                            placeholder='quantity'
                            value={data.quantity}
                            onChange={(e) => dispatch({ type: 'setQuantity', payload: e.target.value })}
                        />
                    </div>
                    <div className="selectTest addProductsAndTestInput selectInputContainer">
                        <div className='selectInputCaption'>
                            <p>{data.type}</p>
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
                <div className="testDetail addProductsAndTestInput">
                    <input
                        type='text'
                        placeholder='test Details'
                        value={data.productDetails}
                        onChange={(e) => dispatch({ type: 'setTestDetails', payload: e.target.value })}
                    />
                </div>
                <div className="fastingRequired addProductsAndTestInput">
                    <div>
                        <p>Fasting Required</p>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            checked={data.fastingRequired}
                            onChange={(e) => dispatch({ type: 'setFastingRequired', payload: !data.fastingRequired })}
                        />
                    </div>
                </div>
                <div className="greenButton">
                    <button onClick={addButtonhandler}>Add Test</button>
                </div>
            </div>
        </div >
    );
}

const mapStateToProps = state => ({
    currentVendor: state.currentVendor,
    auth_token: state.token
});

const mapDispatchToProps = dispatch => ({
    setCurrentVendor: (payload) => dispatch(setCurrentVendor(payload)),
    setProductsAndTestList:(payload)=>dispatch(setProductsAndTestList(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTests);