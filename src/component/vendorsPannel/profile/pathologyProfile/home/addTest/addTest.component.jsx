import React from 'react';
import './addTest.styles.scss';

//importing addTest component from pathology registration
import AddTest from '../../../../registration/registerAsPathology/addTest/addTest.component';

const AddTests = ({ setShowAddTests, setTestCategories }) => {
    return (
        <div className="addTestPathologyProfileHome" >
            <AddTest {...{ setShowAddTests, setTestCategories }} />
        </div>
    );
}

export default AddTests;