import React, { useCallback } from 'react';
import './settingHome.styles.scss';

//importing reusable components
import VendorsProfileSettingButton from '../../../../../reusableComponent/vendorsProfileSettingButton/vendorsProfileSettingButton.component';

//importing icons
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { FaLanguage, FaAddressCard } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiScooter } from 'react-icons/gi';

const SettingHome = ({ history, match }) => {

    const gotoPaymentSetting = useCallback(() => {
        history.push(`${match.url}/paymentSetting`);
    }, [history, match.url]);

    const gotoAddStaff = useCallback(() => {
        history.push(`${match.url}/addStaff`);
    }, [history, match.url]);

    const gotoAddTiming = useCallback(() => {
        history.push(`${match.url}/addTiming`);
    }, [history, match.url]);

    const gotoCollectionSetting = useCallback(() => {
        history.push(`${match.url}/collectionSetting`);
    }, [history, match.url]);

    return (
        <div className="settingHome">
            <VendorsProfileSettingButton
                icon={<GiScooter />}
                label1='Collection Setting'
                label2='Set up the collection setting, ie min. delivery ammount, collection charges, COD etc'
                onClick={gotoCollectionSetting}
            />
            <VendorsProfileSettingButton
                icon={<BiWallet />}
                label1='PaymentSetting'
                label2='Option to receive online payment through upi or bank transfer'
                onClick={gotoPaymentSetting}

            />
            <VendorsProfileSettingButton
                icon={<AiOutlineClockCircle />}
                label1='Add Timing'
                label2='Set up timing of lab to inform customers'
                onClick={gotoAddTiming}

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