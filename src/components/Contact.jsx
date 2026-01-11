import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact({ darkMode }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message submitted! (Email functionality can be added later)');
        setFormData({ name: '', email: '', message: '' });
    };

    const styles = {
        section: {
            padding: '100px 20px',
            backgroundColor: darkMode ? '#111827' : '#f3f4f6',
            color: darkMode ? '#e5e7eb' : '#111827',
            fontFamily: "'Inter', sans-serif",
        },
        container: {
            maxWidth: '800px',
            margin: '0 auto',
        },
        heading: {
            fontSize: '2.5rem',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '50px',
            color: darkMode ? '#f9fafb' : '#111827',
        },
        contactInfo: {
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            marginBottom: '50px',
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        infoItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        },
        link: {
            color: '#3b82f6',
            textDecoration: 'none',
            transition: 'color 0.3s',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
        },
        input: {
            padding: '12px',
            borderRadius: '8px',
            border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#e5e7eb' : '#111827',
            fontSize: '1rem',
        },
        textarea: {
            padding: '12px',
            borderRadius: '8px',
            border: `1px solid ${darkMode ? '#374151' : '#d1d5db'}`,
            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
            color: darkMode ? '#e5e7eb' : '#111827',
            fontSize: '1rem',
            resize: 'vertical',
        },
        button: {
            padding: '12px 20px',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            borderRadius: '8px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: 'none',
        },
    };

    return (
        <section style={styles.section} id="contact">
            <div style={styles.container}>
                <h2 style={styles.heading}>Contact Me</h2>

                {/* Contact Info with Icons */}
                <div style={styles.contactInfo}>
                    <div style={styles.infoItem}>
                        <FaEnvelope color="#3b82f6" />{' '}
                        <a href="mailto:yvesmugisha901@gmail.com" style={styles.link}>
                            yvesmugisha901@gmail.com
                        </a>
                    </div>
                    <div style={styles.infoItem}>
                        <FaPhoneAlt color="#3b82f6" /> +250784559922 || +250739098785
                    </div>
                    <div style={styles.infoItem}>
                        <FaGithub color="#3b82f6" />{' '}
                        <a href="https://github.com/yvesmugisha901" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            github.com/yvesmugisha901
                        </a>
                    </div>
                    <div style={styles.infoItem}>
                        <FaLinkedin color="#3b82f6" />{' '}
                        <a href="https://www.linkedin.com/in/mugisha-yves-3ba662302/" target="_blank" rel="noopener noreferrer" style={styles.link}>
                            linkedin.com/in/mugisha-yves-3ba662302
                        </a>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        style={styles.textarea}
                    />
                    <button
                        type="submit"
                        style={styles.button}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#1d4ed8')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#2563eb')}
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
