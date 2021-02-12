import React from 'react';
import { connect } from 'react-redux';
import './vendorsProfile.styles.scss';

//importing custom components
import DoctorProfile from './doctorProfile/doctorProfile.component';
import HospitalProfile from './hospitalProfile/hospitalProfile.component';
import PharmacyProfile from './pharmacyProfile/pharmacyProfile.component';
import PathologyProfile from './pathologyProfile/pathologyProfile.component';
import ProfileHeader from './profileHeader/profileHeader.component';

const VendorsProfile = ({ currentVendor }) => {
    return (
        <div className="vendorsProfile">
            <ProfileHeader />
            {
                (() => {
                    if (currentVendor.businessType === 'doctor') {
                        return <DoctorProfile />
                    }
                    else if (currentVendor.businessType === 'hospital') {
                        return <HospitalProfile />
                    }
                    else if (currentVendor.businessType === 'pathology') {
                        return <PharmacyProfile />
                    }
                    else if (currentVendor.businessType === 'pharmacy') {
                        return <PathologyProfile />
                    }
                })()
            }
        </div>
    );
}

const mapStateToprops = state => ({
    currentVendor: state.currentVendor
});

export default connect(mapStateToprops)(VendorsProfile);