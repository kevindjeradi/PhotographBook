// src/components/ImageThumbnail.js
import React from 'react';
import { Card, CardMedia } from '@mui/material';

function ImageThumbnail({ image, onClick }) {
    return (
        <Card className="thumbnail" onClick={() => onClick(image)}>
            <CardMedia
                component="img"
                image={image.src}
                alt={image.alt}
            />
            <div className="image-title">{image.alt}</div>
        </Card>
    );
}
export default ImageThumbnail;