import React from 'react';
import './landingPage.styles.scss';
//importing icons
import { AiFillCamera, AiOutlineScan, AiOutlineClose } from 'react-icons/ai';
import { GrGallery } from 'react-icons/gr';

//importing reusable component
import Icon from '../../../../reusableComponent/icon/icon.component';

const UploadPrescription = ({ match, history }) => {

    const gotoPage = (page) => {
        history.push(`${match.url}${page}`);
    }

    return (
        <div className="uploadPrescriptionContainer">
            <div className="uploadPrescription">

                <span className="close">
                    <Icon onClick={() => history.goBack()}>
                        <AiOutlineClose />
                    </Icon>
                </span>

                <div className="header">
                    uploadPrescription
                </div>

                <div className="camera" onClick={() => { gotoPage('camera'); }}>
                    <Icon>
                        <AiFillCamera />
                    </Icon>
                    <p>
                        Camera
                    </p>
                </div>

                <div className="upload" onClick={() => { gotoPage('gallery'); }}>
                    <Icon>
                        <GrGallery />
                    </Icon>
                    <p>
                        Gallery
                    </p>
                </div>

                <div className="scan" onClick={() => { gotoPage('scanQR'); }}>
                    <Icon>
                        <AiOutlineScan />
                    </Icon>
                    <p>
                        Scan QR
                    </p>
                </div>

            </div>
        </div>
    );
}

export default UploadPrescription;
