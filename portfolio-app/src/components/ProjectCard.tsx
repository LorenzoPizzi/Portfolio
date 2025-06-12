import React from 'react';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
        </div>
    );
};

export default ProjectCard;