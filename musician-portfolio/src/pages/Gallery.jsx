import React, { useState } from 'react';
import '../styles/Gallery.css'

// Dummy images (replace these with actual images later)
const images = [
    { src: 'image1.jpg', alt: 'Performance 1' },
    { src: 'image2.jpg', alt: 'Studio Session 1' },
    { src: 'image3.jpg', alt: 'Performance 2' },
    { src: 'image4.jpg', alt: 'Studio Session 2' },
    { src: 'image5.jpg', alt: 'Studio Session 3' },
    { src: 'image6.jpg', alt: 'Joe' },
    { src: 'image7.jpg', alt: 'Mama so big' },
    { src: 'image8.jpg', alt: 'que se cae de la cama por los dos lados' },
    // Add more images as needed
];

function Gallery() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openModal = (imgSrc) => {
        setSelectedImage(imgSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="gallery-page">
            <h1>Gallery</h1>
            <p>Photos and videos from my performances and studio sessions.</p>

            {/* Horizontal scroll gallery */}
            <div className="gallery">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index} onClick={() => openModal(image.src)}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>

            {/* Modal for larger image */}
            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close">&times;</span>
                    <img src={selectedImage} alt="Large View" className="modal-content" />
                </div>
            )}
        </div>
    );
}

export default Gallery;
