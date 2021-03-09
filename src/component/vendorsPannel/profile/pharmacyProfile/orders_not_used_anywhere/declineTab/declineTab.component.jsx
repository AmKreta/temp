import React from 'react';
import './declineTab.styles.scss';

const height = window.screen.height - (window.screen.height / 100) * 20;

const DeclineTab = ({ setShowDeclineTab, setActiveTabNull }) => {
    return (
        <div className="vendorPopupPendingDeclineTabContainer" style={{ height }}>
            <div className="vendorPopupPendingDeclineTab" onClick={(e) => { setShowDeclineTab(false); }}>
                amk
        </div>
        </div>
    );
}

export default DeclineTab;