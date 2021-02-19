import React from 'react';
import { useSelector } from 'react-redux';
import './productAndtestListing.styles.scss';

//importing jss
import { blue } from '../../../assets/globalJSS';
//importing icons
import { BiPlus, BiMinus } from 'react-icons/bi';
import { MdLocalOffer } from 'react-icons/md';

//importing reusable components
import Icon from '../../reusableComponent/icon/icon.component';

const ProductAndTestListing = ({ category, company, details, fastingRequired, image, itemType, mrp, name, qty, qtyType, sellingPrice }) => {
    const businessType = useSelector(state => state.currentVendor.businessType);
    return (
        <div className={`vendorTestAndProductListItem ${businessType === 'pathology' ? 'flexDisplay' : null}`} title={category}>
            <div className="vendorTestAndProductListItemHeader">
                <div className="vendorTestAndProductListItemHeaderCount">
                    {qty}KG
                </div>
                {
                    businessType === 'pathology'
                        ? <div className="vendorTestAndProductListItemHeaderLabel">
                            <p>Fasting Required</p>
                        </div>
                        : null
                }
            </div>
            {
                (() => {
                    let discount = 0;
                    discount = 100 - ((sellingPrice / mrp) * 100);
                    return businessType === 'pharmacy' && discount > 0
                        ? <div className="productsOffer">
                            <Icon size='65px' iconColor={blue}>
                                <MdLocalOffer />
                            </Icon>
                            <div className="productDiscount">
                                <p>{discount}%</p>
                                <p>Off</p>
                            </div>
                        </div>
                        : null
                })()
            }
            <div className="vendorTestAndProductListItemMain">
                <img src="https://img10.hkrtcdn.com/2034/prd_203349_o.jpg" alt='product' />
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
                            qty === 0
                                ? <div className="ProductListAddButton">
                                    add button
                                </div>
                                : <div className='productListAddRemoveButton'>
                                    <div className="removeProductsFromList">
                                        <Icon size='18px'>
                                            <BiMinus />
                                        </Icon>
                                    </div>
                                    <div className="quantityOfProductsLeft">
                                        {qty}
                                    </div>
                                    <div className="AddMoreProductsToList">
                                        <Icon size='18px'>
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