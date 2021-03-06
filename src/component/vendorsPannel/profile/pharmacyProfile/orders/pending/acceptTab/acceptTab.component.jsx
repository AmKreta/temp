import React from 'react';
import './acceptTab.styles.scss';

const height = window.screen.height - (window.screen.height / 100) * 20;

const AcceptTab = ({ setShowAcceptTab, setActiveTabNull }) => {
    return (
        <div className="vendorPopupPendingAcceptTabContainer" style={{ height }}>
            <div className="vendorPopupPendingAcceptTab">
                <div>
                    <p>
                        All order items are available aith you and are ok with Delivery and Payment method
                    </p>
                </div>
                <div>
                    <button
                        className='whiteButton'
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowAcceptTab(false); //closes this tab
                        }}
                    >
                        No
                    </button>
                    <button
                        className='greenButton'
                        onClick={(e) => {
                            e.stopPropagation();
                            setShowAcceptTab(false); //closes this tab
                            setActiveTabNull(); //get back to orders page
                        }}
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AcceptTab;