import React, { useRef, useState, useEffect } from 'react';
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

const AddProducts = () => {

    const [testTypes, setTestTypes] = useState([]);
    const [tests, setTests] = useState([]);

    useEffect(() => {
        setTestTypes(['a', 'b', 'c']);
        setTests(['a', 'b', 'c', 'd']);
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
                    <input type='file' multiple="multiple" style={{ display: 'none' }} ref={imageInputRef} />
                </div>
                <div className="addImagesCaption">
                    <p>Add Images</p>
                    <p>(Upto 3 images)</p>
                </div>
            </div>
            <div className="addProductsAndTestInputContainer">
                <div className="testName addProductsAndTestInput">
                    <input type='text' placeholder='Test Name / Package Name' />
                </div>
                <div className="selectTest addProductsAndTestInput selectInputContainer">
                    <div className='selectInputCaption'>
                        <p>Select Test</p>
                    </div>
                    <div className='selectInput'>
                        <select>
                            {
                                testTypes.map((item, index) => <option key={index} value={item}>{item}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="price flexInputContainer">
                    <div className="mrp addProductsAndTestInput rupeeInout">
                        <Icon noRippleEffect size='15px' >
                            <BiRupee />
                        </Icon>
                        <input type='text' placeholder='mrp' />
                    </div>
                    <div className="sellingPrice addProductsAndTestInput rupeeInout">
                        <Icon noRippleEffect size='15px' >
                            <BiRupee />
                        </Icon>
                        <input type='text' placeholder='selling price' />
                    </div>
                </div>
                <div className="tests flexInputContainer">
                    <div className="ten addProductsAndTestInput">
                        <input type='text' placeholder='10' />
                    </div>
                    <div className="selectTest addProductsAndTestInput selectInputContainer">
                        <div className='selectInputCaption'>
                            <p>Tests</p>
                        </div>
                        <div className='selectInput'>
                            <select>
                                {
                                    tests.map((item, index) => <option key={index} value={item}>{item}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="testDetail addProductsAndTestInput">
                    <input type='text' placeholder='Test Details' />
                </div>
                <div className="fastingRequired addProductsAndTestInput">
                    <div>
                        <p>Fasting Required</p>
                    </div>
                    <div>
                        <input type="checkbox" />
                    </div>
                </div>
            </div>
            <div className="greenButton">
                <button>Add Test</button>
            </div>
            <div className="uploadtestList">
                <div>
                    <Icon iconColor='white' size='2em'>
                        <ImUpload3 />
                    </Icon>
                </div>
                <div>
                    <p>or Upload test list excel to Mediseen Whatsaap</p>
                </div>
            </div>
        </div >
    );
}

export default AddProducts;