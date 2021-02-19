import React from 'react';

//importing custom components
import VendorQR from '../../vendorQR/vendorQR.component';

const Delivered = ({ setShowDeliverTab, setActiveTabNull }) => <VendorQR showVendorQRTab={setShowDeliverTab} goBackToOrdersPage={setActiveTabNull} />

export default Delivered;