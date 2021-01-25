import React, { useRef } from 'react';
import './addproductsAndTest.styles.scss';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

//importing icons
import { IoMdBarcode } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';
import { ImUpload3 } from 'react-icons/im';

//importing jss
import { lightBlue } from '../../../../assets/globalJSS';

const AddProducts = () => {
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
            <div className="addProductsAndTestInputs">
                <div className="testName">
                    <input />
                </div>
                <div className="selectTest">
                    <input />
                </div>
                <div className="price">
                    <div className="mrp">
                        <input />
                    </div>
                    <div className="sellingPrice">
                        <input />
                    </div>
                </div>
                <div className="tests">
                    <div className="ten">
                        <input />
                    </div>
                    <div className="selectTest">
                        <option />
                    </div>
                </div>
                <div className="testDetail">
                    <input />
                </div>
                <div className="fastingRequired">
                    <input type="checkbox" />
                </div>
            </div>
            <div className="greenButton">
                <button>Save</button>
            </div>
            <div className="uploadtestList">
                <div>
                    <Icon>
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