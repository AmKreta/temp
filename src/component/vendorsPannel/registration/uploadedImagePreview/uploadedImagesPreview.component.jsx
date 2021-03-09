import React, { useEffect, useState } from 'react';
import './uploadedImagesPreview.styles.scss';

const UploadedImagesPreview = ({ imagesArray }) => {
    const [previewArray, setPreviewArray] = useState([]);
    const [activeImageIndex, setActiveImageIndex] = useState(null);

    useEffect(() => {
        createPreview();
        setPreviewArray([]);
    }, [imagesArray]);

    const createPreview = () => {
        imagesArray.forEach((item, index) => {
            let reader = new FileReader();
            reader.onload = (e) => setPreviewArray(prevState => [...prevState, e.target.result]);
            reader.readAsDataURL(item);
        });
    }

    return (
        <div className="uploadedImagesPreviewContainer">
            {
                previewArray.map((item, index) => (
                    <div
                        className={`uploadedImagesContainer ${activeImageIndex === index ? 'activeInputImage' : null}`}
                        onClick={(e) => { console.log(index); setActiveImageIndex(index) }}
                        key={index}
                    >
                        <img src={item} />
                    </div>
                ))
            }
        </div>
    );
}

export default UploadedImagesPreview;