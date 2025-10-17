import { motion } from 'framer-motion';
import { useRef } from 'react';
import profilephoto from '../assets/profile_photo3.jpg';
import {
    Github,
    Linkedin,
    Mail,
    Code2,
    Database,
    Globe,
    Server,
    Cpu,
    BrainCircuit,
    Rocket,
    MessageSquare,
    Sparkles, Braces, Figma, Wrench
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { InteractiveBackground } from './InteractiveBackground';
// import { Projects } from './Projects';

function App() {
    const [heroRef] = useInView({ threshold: 0.1, triggerOnce: true });
    const [skillsRef, skillsInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [quoteRef, quoteInView] = useInView({ threshold: 0.1, triggerOnce: true });
    const [experienceRef, experienceInView] = useInView({ threshold: 0.1, triggerOnce: true });

    // Refs for Contact and Projects sections
    const contactRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;
    const projectsRef = useRef<HTMLElement>(null) as React.RefObject<HTMLElement>;

    // Smooth scrolling function
    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const skills = [
        { name: 'Frontend Development', icon: <Globe className="h-8 w-8" />, details: 'React, TypeScript' },
        // { name: 'Backend Development', icon: <Server className="h-8 w-8" />, details: 'Go, PHP' },
        { name: 'Database Management', icon: <Database className="h-8 w-8" />, details: 'MySql, Redis, MongoDB, Firebase, Postgres' },
        { name: 'System Architecture', icon: <Cpu className="h-8 w-8" />, details: 'Docker' },
        { name: 'API Development', icon: <Code2 className="h-8 w-8" />, details: 'REST, FastAPI, GraphQL, Express' },
        // { name: 'AI/ML Integration', icon: <BrainCircuit className="h-8 w-8" />, details: 'TensorFlow, PyTorch, Keras, YOLO, Pandas' },
        { name: 'Programming Languages', icon: <Braces className="h-8 w-8" />, details: 'Golang, Python, Java, JavaScript' },
        { name: 'Dev Tools & Methodologies', icon: <Wrench className="h-8 w-8" />, details: 'Git, Agile Development, CI/CD' },
        // { name: 'UI/UX Design', icon: <Figma className="h-8 w-8" />, details: 'Figma, UI/UX Design Principles' },

    ];

    const experiences = [
        {
            company: 'Juvare',
            role: 'Full Stack Developer Intern',
            period: '',
            description: (
                <div className="space-y-8 font-sans text-gray-800">
                    {/* Frontend Development */}
                    <div>
                        <h3 className="text-l font-bold text-black-600 border-b-2 border-gray-200 pb-1 mb-3">
                            Frontend Development
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Developed two draggable, reusable UI components using GrapesJS and TypeScript, increasing design flexibility and reducing development time for future modules.
                            </li>
                            <li>
                                Contributed to UI styling fixes and implemented feature enhancements, ensuring a consistent, user-friendly, and polished user interface aligned with modern UX standards.
                            </li>
                        </ul>
                    </div>

                    {/* Backend Development */}
                    <div>
                        <h3 className="text-l font-bold text-black-600 border-b-2 border-gray-200 pb-1 mb-3">
                            Backend Development
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Briefly worked with PostgreSQL for backend data integration to support UI components.
                            </li>
                            <li>
                                Implemented CI/CD pipelines with GitLab to automate build, test, and deployment, ensuring reliable and repeatable production rollouts.
                            </li>
                        </ul>
                    </div>

                    {/* Collaboration & Process */}
                    <div>
                        <h3 className="text-l font-bold text-black-600 border-b-2 border-gray-200 pb-1 mb-3">
                            Collaboration & Process
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Collaborated with the engineering team in an Agile environment to deliver bug fixes and product improvements, helping achieve 100% of sprint goals in each sprint.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            company: 'Sureify',
            role: 'Software Engineer',
            period: '',
            description: (
                <div className="space-y-8 font-sans text-gray-800">
                    {/* Backend Development */}
                    <div>
                        <h3 className="text-l font-bold text-black-600 border-b-2 border-gray-200 pb-1 mb-3">
                            Backend Development
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Built and optimized</strong> secure HTTPS-based RESTful APIs using <strong>GoLang</strong> and <strong>PHP</strong> for 7+ platforms, improving system response time by <strong>30%</strong> and maintaining <strong>99.9% uptime</strong>.
                            </li>
                            <li>
                                <strong>Implemented Redis caching</strong> and optimized <strong>10+ MySQL queries</strong>, reducing query response time by <strong>40%</strong> and supporting <strong>2x user traffic growth</strong>.
                            </li>
                            <li>
                                <strong>Integrated Dockerized microservices</strong>, streamlining testing, debugging, and redeployment after code updates.
                            </li>
                            <li>
                                <strong>Optimized APNs push notifications</strong> using Go routines and a worker pool, increasing throughput by <strong>25%</strong>.
                            </li>
                        </ul>
                    </div>

                    {/* Frontend Development */}
                    <div>
                        <h3 className="text-l font-bold text-black-600 border-b-2 border-gray-200 pb-1 mb-3">
                            Frontend Development
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Developed interactive UI components</strong> in <strong>ReactJS</strong>, contributing to features that achieved a <strong>30–40% increase</strong> in user engagement—the highest in company history.
                            </li>
                            <li>
                                <strong>Enhanced front-end performance</strong> by reducing page load times by <strong>10%</strong> through prefetching and asynchronous API calls.
                            </li>
                            <li>
                                <strong>Ensured cross-platform consistency</strong> across web and mobile apps, improving user satisfaction.
                            </li>
                        </ul>
                    </div>

                    {/* System Architecture & Scalability */}
                    <div>
                        <h3 className="text-l font-bold text-black-600 border-b-2 border-gray-200 pb-1 mb-3">
                            System Architecture & Scalability
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Designed scalable architectures</strong> using Go and PHP, supporting exponential user growth without performance degradation.
                            </li>
                            <li>
                                Maintained <strong>high API uptime (90–99.9%)</strong> across integrated web and mobile systems.
                            </li>
                            <li>
                                <strong>Leveraged containerization and caching</strong> to ensure smooth scaling and high availability in production environments.
                            </li>
                        </ul>
                    </div>

                    {/* Collaboration & Process */}
                    <div>
                        <h3 className="text-l font-bold text-black-600 border-b-2 border-gray-200 pb-1 mb-3">
                            Collaboration & Process
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Worked with 4+ cross-functional teams</strong> to deliver 7+ client-facing features and reduce miscommunication by <strong>35%</strong>.
                            </li>
                            <li>
                                <strong>Authored technical documentation</strong>, cutting new developer ramp-up time by <strong>50%</strong>.
                            </li>
                            <li>
                                <strong>Participated in Agile cycles</strong>, including sprints, stand-ups, and retrospectives.
                            </li>
                            <li>
                                <strong>Conducted weekly code reviews</strong> and implemented <strong>100+ unit tests</strong>, improving reliability to <strong>97% test pass rate</strong>.
                            </li>
                        </ul>
                    </div>

                    {/* Development Philosophy */}
                    <div>
                        <h3 className="text-l font-bold text-black-600 border-b-2 border-gray-200 pb-1 mb-3">
                            Development Philosophy
                        </h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                Focused on building <strong>scalable, maintainable, and user-centric systems</strong> balancing <strong>performance, reliability, and experience</strong>.
                            </li>
                        </ul>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-purple-50 text-gray-900">
            <InteractiveBackground />

            {/* Main Content */}

            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex items-center justify-center p-8 relative"
            >
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">

                    {/* Profile Picture and Blur Background */}
                    <motion.div
                        className="relative lg:w-1/3" // Set width to 1/3 for more space on text side
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <div className="relative">
                            {/* glow behind image */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-orange-500 rounded-full blur-lg opacity-50 -z-10 pointer-events-none lg:w-80 lg:h-80" />

                            {/* circular container ensures correct aspect ratio and hides overflow */}
                            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden">
                                <img
                                    src={profilephoto}
                                    alt="Profile"
                                    className="w-full h-full object-cover object-top relative z-10 shadow-none"
                                />
                            </div>
                        </div>
                    </motion.div>
                    {/*<HeroSection />*/}

                    {/* Text Section */}

                    <motion.div
                        className="lg:w-2/3 text-center lg:text-left" // Set width to 2/3 for more text space
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        <h1 className="text-5xl font-bold mb-6">
                            <span className="text-black"><i>Hi, I'm Sireesha, a</i> </span>
                            <span className="bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text">
                                <i>Software</i>
                            </span>
                            <span className="text-black"> <i> & a</i> </span>
                            <span className="bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text">
                                <i>Full Stack</i>
                            </span>
                            <span className="text-black"> <i>Engineer</i></span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            <i>"I craft elegant solutions to complex problems with code and creativity, driven by a passion for building scalable, business-oriented applications that prioritize customer needs and deliver impactful results."</i>
                        </p>

                        <div className="flex gap-4 justify-center lg:justify-start">
                            <motion.button
                                onClick={() => scrollToSection(contactRef)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-teal-500 to-purple-500 px-6 py-3 rounded-lg flex items-center gap-2 text-white shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <MessageSquare className="h-5 w-5" />
                                Contact Me
                            </motion.button>
                            <motion.button
                                onClick={() => scrollToSection(projectsRef)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border border-purple-500 px-6 py-3 rounded-lg flex items-center gap-2 text-purple-500 hover:bg-purple-50 transition-colors"
                            >
                                <Rocket className="h-5 w-5" />
                                View Projects
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <Sparkles className="h-6 w-6 text-purple-500" />
                </motion.div>
            </motion.section>

            {/* Quote Section */}
            <motion.section
                ref={quoteRef}
                initial={{ opacity: 0 }}
                animate={quoteInView ? { opacity: 1 } : {}}
                className="py-20 px-8 bg-gradient-to-r from-teal-100 to-purple-100"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <blockquote className="text-3xl font-light italic text-gray-800">
                        "It always seems impossible until it's done."
                        <footer className="text-lg text-gray-600 mt-4">- Nelson Mandela</footer>
                    </blockquote>
                </div>
            </motion.section>


            {/* Skills Section */}
            <motion.section
                ref={skillsRef}
                initial={{ opacity: 0 }}
                animate={skillsInView ? { opacity: 1 } : {}}
                className="py-20 px-8"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text">
                        Technical Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow group"
                            >
                                <motion.div
                                    className="text-purple-500 mb-4 group-hover:text-teal-500 transition-colors"
                                    animate={{ rotate: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {skill.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                                <p className="text-gray-600">{skill.details}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <section ref={projectsRef} id="projects" className="py-20 px-8 bg-white-100">
                {/* <Projects /> */}
            </section>



            {/* Experience Section */}
            <motion.section
                ref={experienceRef}
                id="experience"
                initial={{ opacity: 0 }}
                animate={experienceInView ? { opacity: 1 } : {}}
                className="py-20 px-8"
            >
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text">
                        Professional Roles
                    </h2>
                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                animate={experienceInView ? { x: 0, opacity: 1 } : {}}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-teal-500 before:to-purple-500"
                            >
                                <div className="absolute left-0 top-0 w-2 h-2 bg-teal-500 rounded-full transform -translate-x-1/2"></div>
                                <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                                <p className="text-purple-600 mb-2">{exp.company}</p>
                                <p className="text-gray-500 mb-4">{exp.period}</p>
                                <p className="text-gray-700">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
            {/* Certifications Section */}
            {/* <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 px-8 bg-gradient-to-b from-white to-gray-100"
            >
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text">
                        Certifications and Publications
                    </h2>
                    <div className="p-8 bg-gradient-to-r from-purple-100 to-teal-100 rounded-xl shadow-md">
                        <div className="text-left">
                            <ul className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <li >
                                    <strong >Publication- </strong>
                                    <a
                                        href="https://ieeexplore.ieee.org/document/9725957"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:underline"
                                    >
                                        Machine Learning Models for Predicting and Clustering Customer Churn Based on Boosting Algorithms and Gaussian Mixture Model - IEEE Conference 2022
                                    </a>
                                </li>
                                <li>
                                    <strong>Certifications</strong>
                                    <ul className="ml-6 list-disc">
                                        <li>Java for Android - Vanderbilt University</li>
                                        <li>Data Management and Visualization - Wesleyan University</li>
                                        <li>Data Analysis Tools - Wesleyan University</li>
                                        <li>AI Product Management (10 Course Series)- IBM</li>
                                        <li>Google UX Design Certificate</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section> */}


            {/* Contact Section */}
            <section ref={contactRef} id="contact" className="py-20 px-8 bg-gradient-to-b from-transparent to-purple-100">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-teal-500 to-purple-500 text-transparent bg-clip-text">
                        Let's Connect
                    </h2>
                    <div className="flex justify-center gap-8">
                        <motion.a
                            href="https://github.com/kunchalasireesha"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="text-gray-600 hover:text-teal-500 transition-colors"
                        >
                            <Github className="h-8 w-8" />
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/sireeshakunchala/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="text-gray-600 hover:text-purple-500 transition-colors"
                        >
                            <Linkedin className="h-8 w-8" />
                        </motion.a>
                        <motion.a
                            href="mailto:sireeshakunchala06@gmail.com"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="text-gray-600 hover:text-teal-500 transition-colors"
                        >
                            <Mail className="h-8 w-8" />
                        </motion.a>
                    </div>
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-1xl font-light italic text-gray-800">
                            <footer className="text-lg text-gray-600 mt-4">In this world where you could be anywhere, thanks for being here.</footer>
                        </blockquote>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;