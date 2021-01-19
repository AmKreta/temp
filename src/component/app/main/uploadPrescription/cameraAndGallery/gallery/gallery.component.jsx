import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import './gallery.styles.scss';

const Images = ({ src, onClick, index, activeImage }) => {
    return (
        <img
            index={index}
            className={`galleryImage ${activeImage.index === index ? 'activeImage' : null}`}
            src='https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png'
            alt={`gallery image ${index}`}
            onClick={onClick}
        />
    );
}

const images = [
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png',
    'https://3.bp.blogspot.com/-1ahFgWyPHcM/XK1bqzom4MI/AAAAAAAAMaA/UiylLNIyJigP3eOPetLIr3GHVlMDCz_5ACLcBGAs/s1600/TET-OppaDoll-Avatar.png'
];

const Gallery = ({ activeTab, setActiveTab, selectImage, history }) => {

    const [activeImage, setActiveImage] = useState({ index: null, src: null });

    const setImage = (e) => {

        let index = parseInt(e.target.getAttribute('index'));
        let src = e.target.getAttribute('src');
        
        if (activeImage.index === index) {
            fetch(activeImage.src)
                .then(res => {
                    return res.blob();
                })
                .then(blob => {
                    selectImage(blob);
                    history.goBack();
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            setActiveImage({ index, src });
        }
    }

    const setActiveTabGallery = () => {
        if (activeTab !== 'gallery') {
            setActiveTab('gallery');
        }
    }

    const scrollHorizontally = (e) => {
        if (activeTab !== 'gallery') {
            e.target.scrollLeft += e.deltaY;
        }
    }

    return (
        <div className={`gallery ${activeTab === 'gallery' ? 'active' : null}`} onClick={setActiveTabGallery} onWheel={scrollHorizontally}>
            {
                images.map((item, index) => <Images src={item} key={index} index={index} onClick={setImage} activeImage={activeImage} />)
            }
        </div>
    );
}

export default withRouter(Gallery);