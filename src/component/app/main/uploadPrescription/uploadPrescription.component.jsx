import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//importing custom component
import LandingPage from './landingPage/landingPage.component';
import CameraAndGallery from './cameraAndGallery/cameraAndGallery.component';
import EditAndAddNotes from './editAndAddNotes/editAndAddNotes.component';

const UploadPrescription = ({ match }) => {

    const [image, selectImage] = useState(null);
    //const [notes, setNotes] = useState(null);
    //const [tags, settags] = useState(null);

    if (image === null) {
        return (
            <Switch>
                <Route exact path={`${match.url}/`} component={LandingPage} />
                <Route path={`${match.url}/camera`} render={() => <CameraAndGallery selectImage={selectImage} />} />
                <Route path={`${match.url}/gallery`} render={() => <CameraAndGallery selectImage={selectImage} />} />
                <Redirect to='/404' />
            </Switch>
        );
    }
    else {
        return (
            <Switch>
                <Route exact path={`${match.url}/`} render={() => <EditAndAddNotes {...{ image, selectImage }} />} />
            </Switch>
        );
    }

}

export default UploadPrescription