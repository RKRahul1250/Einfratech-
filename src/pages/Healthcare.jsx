import React from 'react';
import { motion } from 'framer-motion';
import './Healthcare.css';

const Healthcare = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 }
  };

  const benefits = [
    {
      title: "Break Down Silos",
      description: "Enable your teams to make better decisions based on real-time data across support teams",
      icon: "bi-diagram-3"
    },
    {
      title: "Optimize Operations",
      description: "Connect equipment and asset data, automate work orders, and manage priorities and expenses",
      icon: "bi-gear-wide-connected"
    },
    {
      title: "Be Regulatory Ready",
      description: "Maintain accurate documentation and ensure processes are followed with built-in compliance controls",
      icon: "bi-shield-check"
    }
  ];

  const solutions = [
    {
      title: "HTM Asset Management",
      icon: "bi-pc-display",
      description: "Manage clinical equipment lifecycle"
    },
    {
      title: "Facilities Maintenance",
      icon: "bi-building-gear",
      description: "Streamline maintenance operations"
    },
    {
      title: "OT Security",
      icon: "bi-shield-lock",
      description: "Protect medical devices and systems"
    },
    {
      title: "Space Management",
      icon: "bi-grid-3x3",
      description: "Optimize hospital space utilization"
    },
    
  ];

  return (
    <motion.div
      className="healthcare-page"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      


<motion.section 
  className="healthcare-hero-section"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="healthcare-hero-wrapper">
    <div className="healthcare-hero-text">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        CONNECTED WORKPLACE FOR <span>HEALTHCARE</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hero-description"
      >
        Collaboration across support teams means focusing on what matters – patient care. 
        Connect every aspect of your hospital including:
      </motion.p>
      
      <motion.ul
        className="hero-features"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <li><span>✔️</span> Clinical equipment and facilities management</li>
        <li><span>✔️</span> Real estate and space planning</li>
        <li><span>✔️</span> Capital planning and projects</li>
        <li><span>✔️</span> OT cybersecurity</li>
      </motion.ul>
    </div>

    <motion.div 
      className="healthcare-hero-image"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img 
        src="/images/d1.png" 
        alt="Healthcare Solutions"
        loading="eager"
      />
    </motion.div>
  </div>
</motion.section>

      <motion.section className="healthcare-benefits-section">
        <div className="healthcare-container">
          <div className="healthcare-section-header">
            <motion.h2 variants={itemVariants}>
              One View Into Your Operations
            </motion.h2>
            <motion.p variants={itemVariants}>
              Eliminate old technology and manual processes. Share information, and work together from one solution that has the capabilities each team needs.
            </motion.p>
          </div>
          <div className="healthcare-benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="healthcare-benefit-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className={`bi ${benefit.icon}`}></i>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="healthcare-testimonial-section">
        <div className="healthcare-container">
          <motion.h2 
            className="healthcare-section-header"
            variants={itemVariants}
          >
            Why Indian Health Service Chose EInfratech Systems India
          </motion.h2>
          <motion.blockquote 
            className="healthcare-testimonial"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            "Everybody is calling a device the same thing. Everybody is referring to the same make and models and are starting to refer to locations, buildings, and rooms using the same nomenclature, so that any reports we get are meaningful."
          </motion.blockquote>
        </div>
      </motion.section>

      <motion.section className="healthcare-solutions-section">
        <div className="healthcare-container">
          <motion.h2 
            className="healthcare-section-header"
            variants={itemVariants}
          >
            Explore the Products in Connected Workplace for Healthcare
          </motion.h2>
          <div className="healthcare-solutions-grid">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="healthcare-solution-card"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <i className={`bi ${solution.icon}`}></i>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="healthcare-cta-section">
        <div className="healthcare-container">
          <div className="healthcare-cta-content">
            <motion.h2 variants={itemVariants}>
              See It In Action
            </motion.h2>
            <motion.p variants={itemVariants}>
              Contact us for a demo to help you reimagine your hospital's operations.
            </motion.p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Healthcare;