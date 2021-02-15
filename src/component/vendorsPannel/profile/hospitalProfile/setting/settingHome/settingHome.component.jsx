import React, { useCallback } from 'react';
import './settingHome.styles.scss';

//importing icons
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { FaLanguage, FaAddressCard } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs'

//importing reusable components
import VendorsProfileSettingButton from '../../../../../reusableComponent/vendorsProfileSettingButton/vendorsProfileSettingButton.component';

const SettingHome = ({ history, match }) => {

    const gotoAddPannel = useCallback((e) => {
        history.push(`${match.url}/addPannel`);
    }, [history, match.url]);

    const gotoAddStaff = useCallback((e) => {
        history.push(`${match.url}/addStaff`);
    }, [history, match.url]);

    const gotoPaymentSetting = useCallback((e) => {
        history.push(`${match.url}/paymentSetting`);
    }, [history, match.url]);

    return (
        <div className="settingHome">
            <VendorsProfileSettingButton
                icon={<AiOutlineClockCircle />}
                label1='Add Hospital/Clinic & Timing'
                label2='Add Doctor pannel and visit timing'
                onClick={gotoAddPannel}
            />
            <VendorsProfileSettingButton
                icon={<BiWallet />}
                label1='Payment Setting'
                label2='Option to receive online payment through upi or bank transfer'
                onClick={gotoPaymentSetting}
            />
            <VendorsProfileSettingButton
                icon={<BsFillPeopleFill />}
                label1='Add Support Staff'
                label2='Add staff to manage App & Hospital with you and assist in Receptionist'
                onClick={gotoAddStaff}
            />
            <VendorsProfileSettingButton
                icon={<FaLanguage />}
                label1='Change Language'
                label2='Set up your local language to access and communicate with customer'
            />
            <VendorsProfileSettingButton
                icon={<FaAddressCard />}
                label1='Website Profile'
                label2='Customize website for visitors with coverpage, images, signboard, logo, About you, Specialization'
            />
        </div>
    );
}

export default SettingHome;