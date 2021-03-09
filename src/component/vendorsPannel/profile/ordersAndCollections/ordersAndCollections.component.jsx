import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './ordersAndCollections.styles.scss';
import { Switch, FormControl, InputLabel, Select, makeStyles, MenuItem } from '@material-ui/core';

//importing custom components
import Accepted from './accepted/accepted.component';
import Pending from './pending/pending.component';
import Shipped from './shipped/shipped.component';
import Collected from './collected/collected.component';

//importing jss
import { green } from '../../../../assets/globalJSS';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

//importing services
import { GET_ORDERS_BY_BUSINESS } from '../../../../services/services';

//importing icons
import { FaChartBar } from 'react-icons/fa';
import { BiRupee } from 'react-icons/bi';
import { MdChevronRight } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const data = [
    { orderNo: 2047, orderDate: '02/07/21', orderTime: '02:47 AM', totalItems: 10, cost: 200, paymentMethod: 'COD', status: 'shipped' },
    { orderNo: 2047, orderDate: '02/07/21', orderTime: '02:47 AM', totalItems: 10, cost: 200, paymentMethod: 'ONLINE', status: 'delivered' },
    { orderNo: 2047, orderDate: '02/07/21', orderTime: '02:47 AM', totalItems: 10, cost: 200, paymentMethod: 'ONLINE', status: 'accepted' },
    { orderNo: 2047, orderDate: '02/07/21', orderTime: '02:47 AM', totalItems: 10, cost: 200, paymentMethod: 'COD', status: 'shipped' },
    { orderNo: 2047, orderDate: '02/07/21', orderTime: '02:47 AM', totalItems: 10, cost: 200, paymentMethod: 'ONLINE', status: 'delivered' },
    { orderNo: 2047, orderDate: '02/07/21', orderTime: '02:47 AM', totalItems: 10, cost: 200, paymentMethod: 'ONLINE', status: 'cancelled' },
    { orderNo: 2047, orderDate: '02/07/21', orderTime: '02:47 AM', totalItems: 10, cost: 200, paymentMethod: 'COD', status: 'pending' },
    { orderNo: 2047, orderDate: '02/07/21', orderTime: '02:47 AM', totalItems: 10, cost: 200, paymentMethod: 'COD', status: 'collected' }
]

const Orders = () => {
    const classes = useStyles();
    const [status, setStatus] = useState('All');
    const [switchStatus, setSwitchStatus] = useState(true);
    const [showOrderStats, setShowOrderStats] = useState(false);
    const [activeTab, setActiveTab] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    const businessType = useSelector(state => state.currentVendor.businessType);
    const auth_token = useSelector(state => state.token);

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const toggleSwitch = (e) => {
        setSwitchStatus(prevState => !prevState);
    }

    const toggleOrderStats = useCallback((e) => {
        e.stopPropagation();
        setShowOrderStats(prevState => !prevState);
    }, [setShowOrderStats]);

    const setActiveTabNull = useCallback((e) => {
        setActiveTab(null);
    }, [setActiveTab]);

    useEffect(() => {
        axios
            .get(GET_ORDERS_BY_BUSINESS, {
                headers: {
                    'Authorization': `Bearer ${auth_token.accessToken}`
                }
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert(`unable to fetch orders`);
            });
    }, []);

    return (
        <div className="vendorsOrders">
            <div className={`orderStatsContainer ${showOrderStats ? null : 'hidden'}`} onClick={toggleOrderStats}>
                <div className="orderStats">
                    <div className="saleIcon">
                        <Icon iconColor={green}>
                            <FaChartBar />
                        </Icon>
                    </div>
                    <div className="todaySale">
                        <p>Today's Sale</p>
                        <p>300</p>
                    </div>
                    <div className="totalSale">
                        <p>Total Sale</p>
                        <p>300</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'left', position: 'relative', left: '-10px' }}>
                <Switch
                    checked={switchStatus}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox', 'title': 'tun off booking for one day' }}
                    onChange={toggleSwitch}
                />
            </div>
            <div className='vendorsOrderHeader' >
                <div>
                    <Icon iconColor='rgb(133, 133, 133)' onClick={toggleOrderStats}>
                        <FaChartBar />
                    </Icon>
                </div>
                <select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    onChange={handleChange}
                >
                    <option value={'All'}>All</option>
                    <option value={'Pending'}>Pending</option>
                    <option value={'Accepted'}>Accepted</option>
                    <option value={'Shipped'}>Shipped</option>
                    {
                        businessType === 'pharmacy'
                            ? <option value={'Delivered'}>Delivered</option>
                            : null
                    }
                    {
                        businessType === 'pathology'
                            ? <option value={'Collected'}>Collected</option>
                            : null
                    }
                    <option value={'Cancelled'}>Cancled</option>
                </select>
            </div>
            <div className="vendorsOrdersListContainer">
                {
                    data
                        .filter(item => (status.toLowerCase() === 'all' || item.status.toLowerCase() === status.toLowerCase()) ? true : false)
                        .map((item, index) => (
                            <div className="orderListItem" key={index} onClick={(e) => { setActiveItem(item); setActiveTab(item.status); }}>
                                <div className="orderNo">
                                    Order No.  {item.orderNo}
                                </div>
                                <div className="orderDateTime">
                                    <div className="orderDate">
                                        {item.orderDate}
                                    </div>
                                    <div className="orderTime">
                                        {item.orderTime}
                                    </div>
                                </div>
                                <div className="orderTotalItems">
                                    <p>Total Items: {item.totalItems}</p>
                                </div>
                                <div className="orderCost">
                                    <Icon noRippleEffect size='20px'>
                                        <BiRupee />
                                    </Icon>
                                    <p>{item.cost}</p>
                                </div>
                                <div className="orderPaymentMethod">
                                    {item.paymentMethod}
                                </div>
                                <div className={`orderStatus ${item.status}`}>
                                    {item.status}
                                </div>
                                <div className="orderDetails">
                                    <p>Details</p>
                                    <div>
                                        <Icon noRippleEffect>
                                            <MdChevronRight size='20px' />
                                        </Icon>
                                    </div>
                                </div>
                                <div className='horizontalRule' />
                            </div>
                        ))
                }
            </div>
            {
                (activeTab === 'shipped' || activeTab === 'Shipped') && businessType === 'pharmacy'
                    ? <Shipped setActiveTabNull={setActiveTabNull} {...activeItem} />
                    : null
            }
            {
                activeTab === 'accepted' || activeTab === 'Accepted'
                    ? <Accepted setActiveTabNull={setActiveTabNull} {...activeItem} />
                    : null
            }
            {
                activeTab === 'pending' || activeTab === 'Pending'
                    ? <Pending setActiveTabNull={setActiveTabNull} {...activeItem} />
                    : null
            }
            {
                (activeTab === 'collected' || activeTab === 'Collected') && businessType === 'pathology'
                    ? <Collected setActiveTabNull={setActiveTabNull} {...activeItem} />
                    : null
            }
        </div >
    );
}

export default Orders;