import React from 'react';
import { connect } from 'react-redux';
import './addTimings.styles.scss';

//importing custom components
import AddDayAndTime from '../addDayAndTime/addDayAndTime.component';

//importing icons
import { AiOutlineClockCircle } from 'react-icons/ai';

//importing reusable components
import Icon from '../../../reusableComponent/icon/icon.component';

//importing actions
import { setStaffTiming, setStoreOpen } from '../../../../actions/action';

//importing routes
import { ADD_STAFF } from '../routes';

const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

const AddTimings = (props) => {

    const save = (e) => {
        e.preventDefault();
        let nextUrl = props.match.url.split('/');
        //nextUrl=['','vendor','registerAs*','deliverySetting or collectionSetting',""]
        nextUrl.pop();//removing last two element
        nextUrl.pop();
        nextUrl.shift();//removing first element
        nextUrl.push(ADD_STAFF);
        props.history.push('/' + nextUrl.join('/'));
    }

    const back = (e) => {
        e.preventDefault();
        props.history.goBack();
    }

    return (
        <div className="addTimings">
            <div className="skipForNowButton">
                <button className='whiteButton'>Skip For Now</button>
            </div>
            <div className="addTimingsLabelContainer">
                <div className="addTimingsLabelIconContainer">
                    <Icon iconColor='white' size='20px'>
                        <AiOutlineClockCircle />
                    </Icon>
                </div>
                <div className="addTimingsLabel">
                    Add Timings
                </div>
            </div>
            <form id='addTimings' className='addTimingsForm'>
                <div className="formHeader">
                    <p>
                        Store Open
                    </p>
                </div>
                <div className="openHours">
                    <div className="openHoursLabel">
                        <p>
                            24 Hours Open
                            </p>
                    </div>
                    <div className="radioInput">
                        <input
                            type='radio'
                            value='no'
                            name='twentyFourHoursOpen'
                            checked={props.storeOpen24Hours ? true : false}
                            onChange={(e) => props.setStoreOpen(true)}
                        />
                        <label htmlFor="twenty four hours open">yes</label>
                    </div>
                    <div className="radioInput">
                        <input
                            type='radio'
                            value='yes'
                            name='twentyFourHoursOpen'
                            checked={props.storeOpen24Hours ? false : true}
                            onChange={(e) => props.setStoreOpen(false)}
                        />
                        <label htmlFor="not twenty four hours open ">no</label>
                    </div>
                </div>
                <div className="dayAndTimeInput">
                    <div className="addDayAndTime">
                        {
                            days.map((item, index) => <AddDayAndTime key={index} day={item} setTimings={props.setStaffTiming} />)
                        }
                    </div>
                </div>
                <div className="dayAndtimeInputButtons">
                    <button className='whiteButton' onClick={back}>Back</button>
                    <button className='greenButton' onClick={save}>Save</button>
                </div>
            </form>
        </div >
    );
}

const mapStateToProps = state => ({
    storeOpen24Hours: state.timingAndStaff.storeOpen24Hours,
    timing: state.timingAndStaff.timing
});

const mapDispatchToProps = dispatch => ({
    setStaffTiming: ({ day, timings }) => dispatch(setStaffTiming({ day, timings })),
    setStoreOpen: (option) => dispatch(setStoreOpen(option))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTimings);
