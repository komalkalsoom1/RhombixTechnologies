import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    // Define projects with categories and images
    const projects = [
        { image: "images/laptop2.jpg", title: 'Portfolio Website', description: 'A personal portfolio website built using React and Tailwind CSS.', category: 'Web Development', link: '#' },
        { image: "images/laptop5.jpg", title: 'To-Do App', description: 'A task management app where users can add, edit, and delete tasks, built with React and localStorage.', category: 'Web Development', link: '#' },
        { image: "images/laptop4.jpg", title: 'CRUD System', description: 'A CRUD (Create, Read, Update, Delete) application for managing data, built with React, Node.js, and MongoDB.', category: 'Web Development', link: '#' },
        { image: "images/laptop6.jpg", title: 'E-commerce Website', description: 'An e-commerce platform built with React, Node.js, Express, and MongoDB for managing products and orders.', category: 'E-commerce', link: '#' },
        { image: "images/laptop2.jpg", title: 'Portfolio Website', description: 'A personal portfolio website built using React and Tailwind CSS.', category: 'Web Development', link: '#' },
        { image: "images/laptop5.jpg", title: 'To-Do App', description: 'A task management app where users can add, edit, and delete tasks, built with React and localStorage.', category: 'Web Development', link: '#' },
        { image: "images/laptop4.jpg", title: 'CRUD System', description: 'A CRUD (Create, Read, Update, Delete) application for managing data, built with React, Node.js, and MongoDB.', category: 'Web Development', link: '#' },
        { image: "images/laptop6.jpg", title: 'E-commerce Website', description: 'An e-commerce platform built with React, Node.js, Express, and MongoDB for managing products and orders.', category: 'E-commerce', link: '#' },
        { image: "images/laptop2.jpg", title: 'Portfolio Website', description: 'A personal portfolio website built using React and Tailwind CSS.', category: 'Web Development', link: '#' },
    ];

    // State for filtered projects
    const [filteredCategory, setFilteredCategory] = useState('All');

    // Filter projects based on selected category
    const filteredProjects = filteredCategory === 'All' ? projects : projects.filter(project => project.category === filteredCategory);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Filter Button Section */}
            <div className="filter-container p-10 text-center">
                <button
                    onClick={() => setFilteredCategory('All')}
                    className="bg-[#1ca998] text-white py-2 px-6 rounded-md hover:bg-[#17a48b] transition duration-300 mx-2"
                >
                    All
                </button>
                <button
                    onClick={() => setFilteredCategory('Web Development')}
                    className="bg-[#1ca998] text-white py-2 px-6 rounded-md hover:bg-[#17a48b] transition duration-300 mx-2"
                >
                    Web Development
                </button>
                <button
                    onClick={() => setFilteredCategory('E-commerce')}
                    className="bg-[#1ca998] text-white py-2 px-6 rounded-md hover:bg-[#17a48b] transition duration-300 mx-2"
                >
                    E-commerce
                </button>
            </div>

            {/* Projects Section */}
            <div className="projects-container p-10">

                {/* Project Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="project-card text-white p-6 rounded-lg shadow-lg hover:scale-105 transition transform"
                            style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                        >
                            <div className="bg-black bg-opacity-60 p-6 rounded-lg">
                                <h3 className="text-3xl font-semibold mb-4 text-[#1ca998] hover:text-white transition-colors duration-300">{project.title}</h3>
                                <p className="text-lg mb-4 leading-relaxed">{project.description}</p>
                                <a href={project.link} className="text-[#1ca998] hover:underline">View Project</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
