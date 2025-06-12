import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>
                Welcome to my portfolio! I am a passionate developer with experience in building dynamic and responsive web applications. 
                My journey in tech started with a fascination for coding and has evolved into a love for creating user-friendly interfaces.
            </p>
            <p>
                In this portfolio, you will find a collection of my projects that showcase my skills and creativity. 
                I am always eager to learn new technologies and improve my craft.
            </p>
            <h2>My Skills</h2>
            <ul>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>CSS</li>
                <li>Node.js</li>
            </ul>
            <h2>Contact</h2>
            <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn!</p>
        </div>
    );
};

export default About;