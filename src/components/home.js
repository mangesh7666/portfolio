import React, { useState, useEffect } from "react"; // Import useEffect for AOS
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaDatabase, FaGithub, FaLinkedin, FaEnvelope,FaPhone } from "react-icons/fa";
import {SiMysql } from "react-icons/si";
import profilePic from './images/mangesh.jpeg'; // Ensure this path is correct relative to your component


// --- AOS Initialization ---
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  
  // --- Theme State ---
  const [currentTheme, setCurrentTheme] = useState('light'); // 'light' or 'dark'

  // --- Color Palettes ---
  const themes = {
    light: {
      primaryBg: "#FFFFFF",       // Pure white
      secondaryBg: "#F8F9FA",     // Light gray
      textColor: "#343A40",       // Dark charcoal
      accentColor: "#6A5ACD",     // SlateBlue
      navBg: "#FFFFFF",
      cardBg: "#FFFFFF",
      cardShadow: "0 10px 20px rgba(0, 0, 0, 0.05)",
      hrColor: "#E9ECEF"
    },
    dark: {
      primaryBg: "#1A1A1A",       // Dark charcoal
      secondaryBg: "#2C2C2C",     // Slightly lighter dark
      textColor: "#E0E0E0",       // Light gray for text
      accentColor: "#ADFF2F",     // YellowGreen / GreenYellow (Dark Grey & Yellow-Green theme)
      navBg: "#2C2C2C",
      cardBg: "#2C2C2C",
      cardShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      hrColor: "#444444"
    }
  };

  const theme = themes[currentTheme];

  // --- Styles ---
  const sectionStyle = {
    backgroundColor: theme.secondaryBg,
    color: theme.textColor,
    paddingTop: "6rem",
    paddingBottom: "6rem",
  };

  const cardStyle = {
    backgroundColor: theme.cardBg,
    color: theme.textColor,
    borderRadius: "1rem",
    boxShadow: `0 10px 20px ${theme.cardShadow}`,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const buttonStyle = {
    backgroundColor: theme.accentColor,
    color: theme.primaryBg, // Text color for button
    border: `2px solid ${theme.accentColor}`,
  };

  const resumeLinkStyle = {
    backgroundColor: theme.accentColor,
    color: theme.primaryBg,
    border: `2px solid ${theme.accentColor}`,
    padding: "0.75rem 1.75rem",
    borderRadius: "0.5rem",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "1.1rem",
    marginTop: "20px",
    display: "inline-block" // Important for button-like appearance
  };

  // --- Skill Data ---
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="h1 mb-2" style={{ color: "#E34C26" }} /> },
    { name: "CSS3", icon: <FaCss3Alt className="h1 mb-2" style={{ color: "#264de4" }} /> },
    { name: "JavaScript", icon: <FaJs className="h1 mb-2" style={{ color: "#F7DF1E" }} /> },
    { name: "React", icon: <FaReact className="h1 mb-2" style={{ color: "#61DAFB" }} /> },
    { name: "Node.js & Express.js", icon: <FaNodeJs className="h1 mb-2" style={{ color: "#68A063" }} /> },
    { name: "PHP", icon: <FaPhp className="h1 mb-2" style={{ color: "#8892BF" }} /> },
    { name: "MongoDB", icon: <FaDatabase className="h1 mb-2" style={{ color: "#47A248" }} /> },
    { name: "MySQL", icon: <SiMysql className="h1 mb-2" style={{ color: "#47A248" }} /> },
  ];

  // --- Project Data ---
  const projects = [
    {
      title: "Voice-Controlled MERN E-commerce Platform",
      description: "Developed a full-stack MERN e-commerce site with hands-free voice control powered by a Python model. Features include user authentication, secure payment integration, and dynamic product management. Showcased real-time voice interaction for navigation and checkout, enhancing accessibility and user experience. Tech: React, Node.js, Express.js, MongoDB, Python (voice model)",
      image: "image2.png",
      github: "https://github.com/mangesh7666/focus-tracker",
      demo: "https://live-demo-link1.com",
    },
    {
      title: "Screen Time Plus - Chrome Extension & React Dashboard",
      description: "Built a productivity and wellness tool with a Chrome extension and React dashboard to track social media usage, freeze/unfreeze websites, set time limits, and capture user stress levels. Helps users manage digital habits effectively with intuitive dashboards and actionable insights. Tech: Node.js, Express.js, React, JavaScript, Chrome Extension APIs, Bootstrap",
      image: "image.png",
      github: "https://github.com/mangesh7666/focus-tracker",
      demo: "https://focus-tracker-2.onrender.com/",
    },
    {
      title: "GST + Profit Calculator",
      description: "Created a dynamic GST and Profit Calculator that computes GST amounts, selling price excluding GST, gross profit, and net profit. Integrated expense handling for accurate financial analysis, helping users make informed pricing and business decisions. Tech: React, JavaScript, Bootstrap",
      image: "image1.png",
      github: "https://github.com/mangesh7666/ecommerce-profit-analyzer",
      demo: "https://mangesh7666.github.io/ecommerce-profit-analyzer/",
    },
    {
      title: "Inventory Management System for Store Owner",
      description: "Developed a web-based Inventory Management System using PHP, MySQL, HTML, CSS, and JavaScript. Store owners can add, update, and delete products, manage stock quantities, and easily track product availability in real-time. The system streamlines inventory monitoring and improves operational efficiency.Tech: PHP, MySQL, HTML, CSS, JavaScript",
      image: "image3.png",
      github: "https://github.com/mangesh7666",
      demo: "https://inventorymanager.infinityfree.me",
    },
  ];

  const ProjectCard = ({ project, reverse }) => (
  <div className="col-md-6 mb-4"> {/* 2 cards per row on medium screens and up */}
    <motion.div
      whileHover={{ y: -10, boxShadow: `0 15px 30px ${theme.cardShadow.replace('0.05', '0.15').replace('0.2', '0.3')}` }}
      className="card h-100 shadow-lg"
      style={cardStyle}
      data-aos="fade-up"
    >
      <div className={`row g-0 d-flex flex-column flex-md-row ${reverse ? 'flex-md-row-reverse' : ''}`}>
        {/* Image Side */}
        <div className="col-12 col-md-6">
          <img
            src={project.image}
            className="img-fluid rounded-start"
            alt={project.title}
            style={{ height: "100%", objectFit: "cover", width: "100%" }}
          />
        </div>
        {/* Text Side */}
        <div className="col-12 col-md-6">
          <div className="card-body d-flex flex-column">
            <h3 className="card-title h5 fw-bold" style={{ color: theme.accentColor }}>{project.title}</h3>
            <p className="card-text flex-grow-1" style={{ color: theme.textColor }}>{project.description}</p>
            <div className="d-flex justify-content-start gap-3 mt-3">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold" style={{ color: theme.accentColor }}>
                <FaGithub className="me-1" /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold" style={{ color: theme.accentColor }}>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);


  return (
    <div style={{ backgroundColor: theme.primaryBg, color: theme.textColor }}>

      {/* Theme Switcher */}
      <div style={{ position: 'fixed', top: '150px', right: '10px', zIndex: '1000' }}>
        <button
          onClick={() => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}
          className="btn btn-sm rounded-circle"
          style={{
            backgroundColor: theme.accentColor,
            color: theme.primaryBg,
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: `2px solid ${theme.accentColor}`
          }}
          aria-label={currentTheme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
          data-aos="fade-left" // AOS animation for the switcher button
        >
          {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top shadow-lg ${currentTheme === 'dark' ? 'navbar-dark' : 'navbar-light'}`} style={{ backgroundColor: theme.navBg }}>
        <div className="container">
          <a className="navbar-brand fw-bold" href="#hero" style={{ color: theme.accentColor }}>My Portfolio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {["Home", "About", "Education", "Skills", "Projects", "Contact"].map((item) => (
                <li className="nav-item" key={item}>
                  <a className="nav-link" href={`#${item.toLowerCase()}`} style={{ color: theme.textColor }}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-vh-100 d-flex align-items-center" style={{ backgroundColor: theme.primaryBg, padding: '0 5%' }}>
        <div className="container-fluid">
          <div className="row flex-column-reverse flex-md-row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="display-2 fw-bold mb-3"
                style={{ color: theme.accentColor }}
                data-aos="fade-right" // AOS animation
              >
                Hi, I'm Mangesh Kuswaha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="lead mb-4 fs-4"
                style={{ color: theme.textColor }}
                data-aos="fade-right" // AOS animation
                data-aos-delay="200"
              >
                Full-Stack Developer | MERN & PHP
              </motion.p>
              {/* Resume Link */}
              <a href="./mangesh_resume (1).pdf" target="_blank" rel="noopener noreferrer" style={resumeLinkStyle} data-aos="fade-up" data-aos-delay="400">
                View Resume
              </a>
              <a href="#projects" className="btn fw-semibold px-4 py-2 ms-3" style={{ ...buttonStyle, backgroundColor: theme.primaryBg, color: theme.accentColor, marginTop:"10px" ,border: `2px solid ${theme.accentColor}` }} data-aos="fade-up" data-aos-delay="600">
                View My Work
              </a>
            </div>
            <div className="col-12 col-md-6 text-center mb-5 mb-md-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="d-inline-block"
                data-aos="zoom-in" // AOS animation
              >
                <img
                  src={profilePic}
                  alt="Mangesh Kuswaha"
                  className="rounded-circle shadow-lg"
                  style={{ width: "250px", height: "250px", objectFit: "cover", border: `5px solid ${theme.accentColor}` }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={sectionStyle} data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">About Me</h2>
          <p className="fs-5 text-center" style={{ color: theme.textColor }}>
            My journey into web development began with a deep curiosity for how things work on the web, which quickly grew into a full-blown passion for building. As a dedicated full-stack developer, I find joy in the entire process of turning complex problems into elegant, efficient, and user-friendly solutions. Whether I'm crafting a responsive front-end with React or building a powerful API with Node.js and Express, I am driven by the desire to create seamless digital experiences. I specialize in the MERN stack and PHP, and I'm always eager to learn new technologies to deliver high-quality, impactful web applications.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="text-center" style={{ backgroundColor: theme.primaryBg, color: theme.textColor, paddingTop: "6rem", paddingBottom: "6rem" }} data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold mb-4">Education</h2>
          <h5 className="fw-bold mb-1" style={{ color: theme.accentColor }}>Bachelor of Computer Applications (BCA)</h5>
          <p className="fw-bold mb-4" style={{ color: theme.textColor }}>Shivaji University Kolhapur | Currently Pursuing (3rd Year)</p>
          <hr style={{ width: "50px", margin: "auto", borderColor: theme.hrColor }} />
          <p className="fs-5 mt-4" style={{ color: theme.textColor }}>I have also built my skills from the ground up by diving into the official documentation and resources of each technology I use. My hands-on knowledge in the MERN stack and PHP comes from a deep and persistent dive into the following:</p>
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-4 text-center mt-4">
            <li className="fw-semibold">React (Official Documentation)</li>
            <li className="fw-semibold">Node.js & Express (Official Websites)</li>
            <li className="fw-semibold">MongoDB (Official Documentation)</li>
            <li className="fw-semibold">JavaScript & ES6+ (MDN)</li>
            <li className="fw-semibold">PHP (Official Documentation)</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5" style={{ backgroundColor: theme.secondaryBg, color: theme.textColor }} data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Skills</h2>
          <div className="row text-center g-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="col-6 col-md-3"
                data-aos="zoom-in" // AOS animation for each skill card
                data-aos-delay={idx * 100} // Stagger animations
              >
                <div className="p-4 rounded shadow-sm d-flex flex-column align-items-center" style={cardStyle}>
                  {skill.icon}
                  <span className="mt-2 fw-semibold">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


<section id="soft-skills" className="text-center" style={{ backgroundColor: theme.primaryBg, paddingTop: "6rem", paddingBottom: "6rem", color: theme.textColor }} data-aos="fade-up">
  <div className="container">
    <h2 className="fw-bold mb-4">Additional Skills</h2>
    <p className="fs-5 mb-4" style={{ color: theme.textColor }}>
      Beyond technical expertise, I bring strong interpersonal and professional skills.
    </p>
    <div className="d-flex flex-wrap justify-content-center gap-3">
      <span className="badge rounded-pill px-4 py-3 fs-5" style={{ backgroundColor: theme.accentColor, color: theme.primaryBg }}>Good English Communication</span>
      <span className="badge rounded-pill px-4 py-3 fs-5" style={{ backgroundColor: theme.accentColor, color: theme.primaryBg }}>Presentation Skills</span>
      <span className="badge rounded-pill px-4 py-3 fs-5" style={{ backgroundColor: theme.accentColor, color: theme.primaryBg }}>Teamwork</span>
      <span className="badge rounded-pill px-4 py-3 fs-5" style={{ backgroundColor: theme.accentColor, color: theme.primaryBg }}>Problem Solving</span>
      <span className="badge rounded-pill px-4 py-3 fs-5" style={{ backgroundColor: theme.accentColor, color: theme.primaryBg }}>Adaptability</span>
      <span className="badge rounded-pill px-4 py-3 fs-5" style={{ backgroundColor: theme.accentColor, color: theme.primaryBg }}>Time Management</span>
    </div>
  </div>
</section>



      {/* Projects Section */}
      <section id="projects" style={{ ...sectionStyle, backgroundColor: theme.primaryBg }} data-aos="fade-up">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Projects</h2>
          <div className="row g-4">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="text-center" style={{ backgroundColor: theme.secondaryBg, paddingTop: "6rem", paddingBottom: "6rem", color: theme.textColor }} data-aos="fade-up">
        <div className="container">
          <h2 className="fw-bold mb-4">Contact Me</h2>
          <p className="fs-5 mb-4" style={{ color: theme.textColor }}>
            Feel free to reach out for collaboration or opportunities.
          </p>
          <div className="d-flex justify-content-center gap-4">
            <a href="mailto:mangeshkuswah1210@gmail.com" className="text-decoration-none fw-semibold" style={{ color: theme.accentColor }}>
              <FaEnvelope className="me-1" /> Email
            </a>
            <a href="tel:+917666351784" className="text-decoration-none fw-semibold" style={{ color: theme.accentColor }}>
        <FaPhone className="me-1" /> Phone
      </a>
            <a href="https://www.linkedin.com/in/mangesh-kusawah-4ba739324/" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold" style={{ color: theme.accentColor }}>
              <FaLinkedin className="me-1" /> LinkedIn
            </a>
            <a href="https://github.com/mangesh7666" target="_blank" rel="noopener noreferrer" className="text-decoration-none fw-semibold" style={{ color: theme.accentColor }}>
              <FaGithub className="me-1" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
  //inventorymanager.infinityfree.me
  //PeHzX1NhkE
}
