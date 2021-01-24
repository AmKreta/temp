import React from 'react';
import './addStaff.styles.scss';

//importing icons
import { BsFillPeopleFill } from 'react-icons/bs';
import { IoMdAdd } from 'react-icons/io';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

//values for type={hospital,pharmacy,pathology}

const AddStaff = () => {
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
                        <label htmlFor="invite staff">Invite Staff</label>
                        <input type='text' placeholder='Enter phone no of staff to manage store' />
                    </div>
                    <select>
                        <option>Manager</option>
                        <option>Delivery Boy</option>
                    </select>
                </div>
                <div className='addNewStaff'>
                    <p>Add new</p>
                    <Icon noRippleEffect>
                        <IoMdAdd />
                    </Icon>
                </div>
                <table>
                    <tr>
                        <td>Suresh Narayan</td>
                        <td>9928725841</td>
                        <td>Manager</td>
                    </tr>
                    <tr>
                        <td>Suresh Narayan</td>
                        <td>9928725841</td>
                        <td>Manager</td>
                    </tr>
                </table>
                <div className='addStaffButtonContainer'>
                    <button className='whiteButton'>Back</button>
                    <button className='greenButton'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddStaff;