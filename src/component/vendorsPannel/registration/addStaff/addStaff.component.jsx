import React, { useState } from 'react';
import { connect } from 'react-redux';
import './addStaff.styles.scss';

//importing actions
import { setStaff, removeStaff } from '../../../../actions/action';

//importing icons
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

const AddedStaffList = ({ name, phoneNo, designation, onClick }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{phoneNo}</td>
            <td>{designation}</td>
            <td className='staffDataIconContainerTD'>
                <div className='staffDataIconContainer'>
                    <Icon onClick={onClick}>
                        <MdClose />
                    </Icon>
                </div>
            </td>
        </tr>
    );
}


//values for type={hospital,pharmacy,pathology}

const AddStaff = (props) => {

    const [name, setName] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [designation, setDesignation] = useState('Manager');

    return (
        <div className="addStaff">
            <div className="skipForNow">
                <button className='whiteButton'>Skip For Now</button>
            </div>
            <div className='addStaffLabelContainer'>
                <div className='addStaffLabelIcon'>
                    <Icon iconColor='white' size='20px'>
                        <BsFillPeopleFill />
                    </Icon>
                </div>
                <div className='addStaffLabel'>
                    Add Staff
                </div>
            </div>
            <form id='addStaff' className='formContainer'>
                <div className='addStaffIntro'>
                    <h5>Add staff(5) so that they can help you to manage Store</h5>
                </div>
                <div className='addStaffDefinations'>
                    <dl>
                        <dt>Manager :</dt>
                        <dd>Can access all operations of the store just can't delete the store</dd>
                        <dt>Delivery Boy :</dt>
                        <dd>Can access all delivery portion only</dd>

                    </dl>
                </div>
                <div className='addStaffInfo'>
                    <div className='inputInfo'>
                        <div className="enterName">
                            <label htmlFor="Enter Name">Enter Name</label>
                            <input
                                type='text'
                                placeholder='Enter name of the staff'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="inputInfo phoneNoAndDesignation">
                            <div className="phonoNoInput">
                                <label htmlFor="invite staff">Invite Staff</label>
                                <input
                                    type='number'
                                    placeholder='Enter phone no of staff to manage store'
                                    value={phoneNo}
                                    onChange={(e) => setPhoneNo(e.target.value)}
                                />
                            </div>
                            <div className='selectDesignation'>
                                <select value={designation} onChange={(e) => setDesignation(e.target.value)}>
                                    <option value='Manager'>Manager</option>
                                    <option value='Delivery Boy'>Delivery Boy</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='addNewStaff' onClick={(e) => {
                    if (name.length && phoneNo.length) {
                        props.setStaff({ name, phoneNo, designation });
                    }
                }}>
                    <div>
                        <p>Add new</p>
                        <Icon noRippleEffect>
                            <IoMdAdd />
                        </Icon>
                    </div>
                </div>
                <table>
                    <tbody>
                        {
                            props.staffArray.map((item, index) => <AddedStaffList key={item.phoneNo} {...item} onClick={(e) => props.removeStaff(index)} />)
                        }
                    </tbody>
                </table>
                <div className='addStaffButtonContainer'>
                    <button className='whiteButton'>Back</button>
                    <button className='greenButton'>Save</button>
                </div>
            </form>
        </div>
    );
}

const mapStateToProps = state => ({
    staffArray: state.addStaff.staffArray
});

const mapDispatchToProps = dispatch => ({
    setStaff: ({ name, phoneNo, designation }) => dispatch(setStaff({ name, phoneNo, designation })),
    removeStaff: (index) => dispatch(removeStaff(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddStaff);