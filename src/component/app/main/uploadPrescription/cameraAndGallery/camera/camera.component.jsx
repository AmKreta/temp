import React, { useEffect, useRef } from 'react';
import './camera.styles.scss';

const facingMode = { front: 'user', back: 'environment' }

const Camera = ({ activeTab, setActiveTab }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        let videoStream;
        window.navigator.mediaDevices.getUserMedia({ video: { facingMode: { exact: facingMode.front } } })
            .then(stream => {
                videoRef.current.srcObject = videoStream = stream;
            })
            .catch(err => {
                alert('camera permission denied');
            });
        return () => {
            if (videoStream) {
                videoStream.getTracks().forEach(function (track) {
                    track.stop();
                });
            }
        }
    }, []);

    const setActiveTabCamera = () => {
        if (activeTab !== 'camera') {
            setActiveTab('camera');
        }
    }

    return (
        <div className={`camera ${activeTab === 'camera' ? 'active' : null}`} onClick={setActiveTabCamera}>
            <video className='video' autoPlay ref={videoRef}></video>
        </div>
    );
}

export default Camera;