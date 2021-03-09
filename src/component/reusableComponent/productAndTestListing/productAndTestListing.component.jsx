import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './productAndtestListing.styles.scss';

//importing jss
import { blue } from '../../../assets/globalJSS';
//importing icons
import { BiPlus, BiMinus } from 'react-icons/bi';
import { MdLocalOffer } from 'react-icons/md';

//importing reusable components
import Icon from '../../reusableComponent/icon/icon.component';

//importing services
import { UPDATE_MY_PRODUCT, UPDATE_MY_TEST } from '../../../services/services';

const ProductAndTestListing = ({ _id, category, company, details, fastingRequired, image, itemType, mrp, name, qty, qtyType, sellingPrice, hasDiscount, discount }) => {

    const businessType = useSelector(state => state.currentVendor.businessType);
    const auth_token = useSelector(state => state.token);

    const [quantity, setQuantity] = useState(qty);

    const incrementProduct = useCallback((e) => {
        let link = businessType === 'pharmacy' ? UPDATE_MY_PRODUCT : UPDATE_MY_TEST;
        axios
            .put(link(_id), { qty: quantity + 1 }, {
                headers: {
                    'Authorization': `Bearer ${auth_token.accessToken}`
                }
            })
            .then(res => {
                setQuantity(prevState => prevState + 1);
            })
            .catch(err => {
                console.log(err);
                alert('unable to increase quantity of product')
            });
    }, [businessType, quantity, setQuantity]);

    const decrementProduct = useCallback((e) => {
        let link = businessType === 'pharmacy' ? UPDATE_MY_PRODUCT : UPDATE_MY_TEST;
        axios
            .put(link(_id), { qty: quantity - 1 }, {
                headers: {
                    'Authorization': `Bearer ${auth_token.accessToken}`
                }
            })
            .then(res => {
                setQuantity(prevState => prevState - 1);
            })
            .catch(err => {
                console.log(err);
                alert('unable to decrease quantity of product')
            });
    }, [businessType, quantity, setQuantity]);

    return (
        <div className={`vendorTestAndProductListItem ${businessType === 'pathology' ? 'flexDisplay' : null} ${quantity === 0 ? 'outOfStock' : null}`} title={category}>
            <div className="vendorTestAndProductListItemHeader">
                <div className="vendorTestAndProductListItemHeaderCount">
                    {qty}KG
                </div>
                {
                    businessType === 'pathology' && fastingRequired
                        ? <div className="vendorTestAndProductListItemHeaderLabel">
                            <p>Fasting Required</p>
                        </div>
                        : null
                }
            </div>
            {
                /*(() => {
                    let discount = 0;
                    discount = 100 - ((sellingPrice / mrp) * 100);
                    return businessType === 'pharmacy' && discount > 0
                        ? <div className="productsOffer">
                            <Icon size='65px' iconColor={blue}>
                                <MdLocalOffer />
                            </Icon>
                            <div className="productDiscount">
                                <p>{discount.toFixed()}%</p>
                                <p>Off</p>
                            </div>
                        </div>
                        : null
                })()*/

                hasDiscount && discount && (
                    <div className="productsOffer">
                        <Icon size='65px' iconColor={blue}>
                            <MdLocalOffer />
                        </Icon>
                        <div className="productDiscount">
                            <p>{discount && discount.toFixed()}%</p>
                            <p>Off</p>
                        </div>
                    </div>
                )
            }
            <div className="vendorTestAndProductListItemMain">
                <img src={image} alt='product' />
            </div>
            <div className="vendorTestAndProductListFooter">
                <div className="vendorTestAndProductListItemName">
                    {name}
                </div>
                <div className="vendorTestAndProductListItemPrice">
                    <div className="vendorTestAndProductListItemSellingPrice">
                        RS.{sellingPrice}
                    </div>
                    {
                        businessType === 'pharmacy'
                            ? <div className="vendorTestAndProductListItemMrp">
                                <del>RS.{mrp}</del>
                            </div>
                            : null
                    }
                </div>
            </div>
            {
                businessType === 'pharmacy'
                    ? <div className="vendorTestAndProductListItemActions">
                        {
                            quantity === 0
                                ? <div className="productListAddButton">
                                    <div className="AddMoreProductsToList">
                                        <Icon size='18px' onClick={incrementProduct}>
                                            <BiPlus />
                                        </Icon>
                                    </div>
                                </div>
                                : <div className='productListAddRemoveButton'>
                                    <div className="removeProductsFromList">
                                        <Icon size='18px' onClick={decrementProduct}>
                                            <BiMinus />
                                        </Icon>
                                    </div>
                                    <div className="quantityOfProductsLeft">
                                        {quantity}
                                    </div>
                                    <div className="AddMoreProductsToList">
                                        <Icon size='18px' onClick={incrementProduct}>
                                            <BiPlus />
                                        </Icon>
                                    </div>
                                </div>
                        }
                    </div>
                    : null
            }
        </div>
    );
}

export default ProductAndTestListing;