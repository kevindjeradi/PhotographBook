// src/components/Gallery.js

import React, { useState } from 'react';
import ImageThumbnail from './ImageThumbnail';
import images from '../data/images';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import 'styles/Gallery.css';
import Masonry from '@mui/lab/Masonry';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const indexOfSelectedImage = images.findIndex(image => image.id === selectedImage?.id);
    const nextImage = images[indexOfSelectedImage + 1];
    const prevImage = images[indexOfSelectedImage - 1];

    return (
        <div className="gallery">
            {selectedImage ? (
                <div className="image-viewer" onClick={() => setSelectedImage(null)}>
                    <div className="image-container">
                        <img src={selectedImage.src} alt={selectedImage.alt} />
                        <button 
                            className="arrow left"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent click from closing the viewer
                                setSelectedImage(prevImage);
                            }} 
                            disabled={!prevImage}
                        >
                            <ArrowBackIcon fontSize='large'/>
                        </button>
                        <button 
                            className="arrow right"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent click from closing the viewer
                                setSelectedImage(nextImage);
                            }} 
                            disabled={!nextImage}
                        >
                            <ArrowForwardIcon fontSize='large'/>
                        </button>
                    </div>
                    <button className="close-button" onClick={() => setSelectedImage(null)}> 
                        <CloseIcon fontSize="medium" />
                    </button>
                </div>
            ) : (
                <Masonry columns={{ xs: 1, sm: 4 }} spacing={3}>
                    {images.map((image) => (
                        <ImageThumbnail key={image.id} image={image} onClick={setSelectedImage} />
                    ))}
                </Masonry>
            )}
        </div>
    );
}
export default Gallery;