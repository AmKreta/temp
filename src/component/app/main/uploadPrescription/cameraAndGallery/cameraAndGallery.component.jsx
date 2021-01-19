import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './cameraAndGallery.styles.scss';

import Camera from './camera/camera.component';
import Gallery from './gallery/gallery.component';

const CameraAndGallery = ({ match, selectImage }) => {
    const [activeTab, setActiveTab] = useState('camera');

    useEffect(() => {
        let active_tab = match.url.split('/').slice(-1)[0]; //selecting last element
        setActiveTab(active_tab);
    }, []);

    return (
        <div className="cameraAndGallery">
            <Camera {...{ activeTab, setActiveTab, selectImage }} />
            <Gallery {...{ activeTab, setActiveTab, selectImage }} />
        </div>
    );
}

export default withRouter(CameraAndGallery);