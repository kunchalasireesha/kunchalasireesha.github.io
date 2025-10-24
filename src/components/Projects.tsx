import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import donsEats from '../assets/donseats.png';
import chatbot from '../assets/PFW_chatbot.png';
import VoicePrescription from '../assets/voiceprescription.png';
import KisaanGraph from '../assets/kisaangraph.jpg';
import FakeNews from '../assets/fakenews.jpg';

const projects = {
    current: [
        {
            title: 'Leveraging AI for Real-Time Fake News Identification and Mitigation',
            description:
                'Developed an ethical, real-time fake news detection system using a multi-model ensemble (Logistic Regression, CNN, LSTM) achieving 99% accuracy. Ensured fairness via class balancing and domain feature removal to avoid source bias. Deployed as a browser extension classifying content into six categories while adhering to ethical AI principles of transparency, fairness, and privacy.',
            image: FakeNews,
            tech: ['Python', 'TensorFlow', 'Flask', 'Chrome Extension', 'NLP'],
            github: 'https://github.com/kunchalasireesha/CS59000_06_Ethical_Artificial_Intelligence',
            live: '',
            featured: true,
        },
        {
            title: 'Donseats',
            description:
                'A responsive platform for Purdue students to order and schedule food online. Implemented Firebase Authentication for secure login, real-time database updates for menu and order management, and Express.js APIs for efficient backend handling. Supports bulk and scheduled ordering to reduce on-campus wait times.',
            image: donsEats,
            tech: ['React.js', 'Express.js', 'Firebase'],
            github: 'https://github.com/kunchalasireesha/Group2_DonsEats_CS53700_FullStackWeb',
            live: 'https://donseats-w5su.onrender.com',
            featured: true,
        },
    ],
    past: [
        {
            title: 'PFW CampusWhiz: A Question Answering System',
            description:
                'An NLP-powered question-answering system employing BERT, RoBERTa, and XLNet to retrieve real-time information from the Purdue Fort Wayne website. Leveraged fine-tuning and preprocessing to achieve high Exact Match scores on SQuAD and custom datasets.',
            image: chatbot,
            tech: ['Python', 'BERT', 'RoBERTa', 'XLNet', 'NLP'],
            github: '',
        },
        {
            title: 'Kisaan Graph',
            description:
                'An Android application visualizing price statistics of agricultural crops across India using government data APIs. Provides historical insights to farmers and stakeholders through intuitive SQLite-based visualization modules.',
            image: KisaanGraph,
            tech: ['Java', 'SQLite', 'Android Studio'],
            github: 'https://github.com/kunchalasireesha/KisaanGraph',
        },
        {
            title: 'Voice Prescription',
            description:
                'Built a voice-to-text prescription generation app that converts doctors’ dictations into structured PDFs and emails them securely. Developed with React.js and Ant Design for UI, using Auth0 for authentication, and Syncfusion with ASP.NET backend for dynamic PDF generation.',
            image: VoicePrescription,
            tech: ['React.js', 'C#', 'ASP.NET', 'Auth0', 'Syncfusion PDF'],
            github: 'https://github.com/kunchalasireesha/Voice-Prescription/tree/master/voice-prescription',
        },
    ],
};


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
};

export const Projects: React.FC = () => {
    return (
        <section className="py-20 px-8 bg-gradient-to-br from-purple-50 via-white to-purple-50">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text"
                >
                    Projects
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.current.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-purple-500">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                        {project.github && (
                                            <div className="flex justify-between items-center">
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-600 hover:text-purple-500 transition-colors"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </a>
                                            </div>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-purple-500 text-white text-sm font-medium px-3 py-1 rounded-md hover:bg-purple-600 transition"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mt-20 mb-16 bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text"
                >
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.past.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white rounded-xl shadow-lg overflow-hidden"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-purple-500">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-600 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.github && (
                                    <div className="flex justify-between items-center">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-purple-500 transition-colors"
                                        >
                                            <Github className="h-5 w-5" />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
