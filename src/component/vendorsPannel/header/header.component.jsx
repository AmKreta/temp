import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './header.styles.scss';

//importing icon
import { AiOutlineCamera } from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
//customComponents
import Icon from '../../reusableComponent/icon/icon.component';

//importing services
import { UPLOAD_FILE, UPDATE_REGISTERED_USER } from '../../../services/services';

//importing actions
import { setCurrentVendor } from '../../../actions/action';

const Header = ({ location }) => {
    const [isHidden, setIsHidden] = useState(true);
    const currentVendor = useSelector(state => state.currentVendor);
    const photo = useSelector(state => state.currentVendor.photo);
    const auth_token = useSelector(state => state.token);
    const addSignBoardref = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname.includes('/profile') || (location.pathname.includes('registerAs') && location.pathname !== '/vendor/registerAs')) {
            setIsHidden(false);
        }
        else if (isHidden) {
            setIsHidden(true);
        }
    }, [location.pathname]);



    const addSignBoardHandler = (e) => {
        let formData = new FormData();
        formData.append('file', e.target.files[0]);
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }
        axios
            .post(UPLOAD_FILE, formData, {
                headers: {
                    'Authorization': `Bearer ${auth_token.accessToken}`,
                    'Content-type': 'multipart/form-data'
                }
            })
            .then(response => {
                axios
                    .put(UPDATE_REGISTERED_USER, { photo: response.data.payload.location }, {
                        headers: {
                            'Authorization': `Bearer ${auth_token.accessToken}`,
                        }
                    })
                    .then(res => {
                        console.log(res.data);
                        dispatch(setCurrentVendor({ ...currentVendor, photo: response.data.payload.location }));
                    })
                    .catch(err => {
                        console.log(err);
                        alert('image uploaded but unable to update user')
                    })
            })
            .catch(err => {
                console.log(err);
                alert('unable to upload image');
            });
    }

    return (
        <div className={`vendorsPannelHeader ${isHidden ? 'hidden' : null}`}>
            <div className="addSignBoard" onClick={(e) => addSignBoardref.current.click()}>
                <div className="addSignBoardIcon">
                    {
                        photo
                            ? <img src={photo} />
                            : <Icon size='30px' iconColor='white'><AiOutlineCamera /></Icon>
                    }
                </div>
                {!photo && <p>Add sign board</p>}
                <input
                    type='file'
                    accept='image/x-png,image/gif,image/jpeg'
                    style={{ display: 'none' }}
                    ref={addSignBoardref}
                    onChange={addSignBoardHandler}
                />
            </div>
            <div className="vendorsName">
                {currentVendor.businessName}
            </div>
            <div className="vendorsNotification">
                <Icon size='30px' iconColor='white'><IoMdNotificationsOutline /></Icon>
            </div>
        </div>
    );
}

export default withRouter(Header);
