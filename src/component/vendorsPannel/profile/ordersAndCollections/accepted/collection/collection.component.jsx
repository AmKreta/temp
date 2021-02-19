import React from 'react';


import VendorQR from '../../vendorQR/vendorQR.component';

const Collection = ({ setShowDeliverCollectionTab, setActiveTabNull }) => <VendorQR showVendorQRTab={setShowDeliverCollectionTab} goBackToOrdersPage={setActiveTabNull} />

export default Collection;

