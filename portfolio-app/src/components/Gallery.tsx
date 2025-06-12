import React from 'react';

const Gallery: React.FC = () => {
    const projectImages = [
        'project1.jpg',
        'project2.jpg',
        'project3.jpg',
        // Add more image filenames as needed
    ];

    return (
        <div className="gallery">
            {projectImages.map((image, index) => (
                <img 
                    key={index} 
                    src={`${process.env.PUBLIC_URL}/images/${image}`} 
                    alt={`Project ${index + 1}`} 
                    className="gallery-image" 
                />
            ))}
        </div>
    );
};

export default Gallery;