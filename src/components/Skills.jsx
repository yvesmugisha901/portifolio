import React from 'react';
import { FaCode, FaDatabase, FaServer, FaTools, FaLayerGroup, FaBook } from 'react-icons/fa';

function Skills({ darkMode }) {
    const styles = {
        section: {
            padding: '100px 20px',
            backgroundColor: darkMode ? '#111827' : '#f9fafb',
            color: darkMode ? '#e5e7eb' : '#111827',
            fontFamily: "'Inter', sans-serif",
            position: 'relative',
            overflow: 'hidden',
        },
        container: {
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'flex-start',
        },
        card: {
            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: darkMode
                ? '0 10px 25px rgba(0,0,0,0.4)'
                : '0 10px 25px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
        },
        cardHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#3b82f6',
            marginBottom: '12px',
        },
        cardContent: {
            color: darkMode ? '#d1d5db' : '#374151',
            fontSize: '1rem',
            lineHeight: '1.6',
        },
        italic: {
            fontStyle: 'italic',
            marginTop: '5px',
            color: darkMode ? '#9ca3af' : '#6b7280',
        },
        title: {
            textAlign: 'center',
            fontSize: '2.5rem',
            fontWeight: 700,
            color: darkMode ? '#f9fafb' : '#111827',
            marginBottom: '50px',
        },
    };

    return (
        <section style={styles.section} id="skills">
            <h2 style={styles.title}>Skills & Tools</h2>
            <div style={styles.container}>
                {/* Left Column */}
                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <FaCode /> Frontend
                    </div>
                    <div style={styles.cardContent}>HTML, CSS, JavaScript, React</div>

                    <div style={styles.cardHeader}>
                        <FaServer /> Backend
                    </div>
                    <div style={styles.cardContent}>PHP, Node.js, Express</div>

                    <div style={styles.cardHeader}>
                        <FaDatabase /> Databases
                    </div>
                    <div style={styles.cardContent}>MySQL, PostgreSQL</div>

                    <div style={styles.cardHeader}>
                        <FaLayerGroup /> Stack
                    </div>
                    <div style={styles.cardContent}>
                        Full-Stack development: React + Node.js + PHP + PostgreSQL/MySQL
                    </div>
                </div>

                {/* Right Column */}
                <div style={styles.card}>
                    <div style={styles.cardHeader}>
                        <FaBook /> Frameworks & Libraries
                    </div>
                    <div style={styles.cardContent}>
                        Bootstrap, Tailwind CSS, React
                        <div style={styles.italic}>Currently Learning: Next.js, TypeScript</div>
                    </div>

                    <div style={styles.cardHeader}>
                        <FaTools /> Tools & Deployment
                    </div>
                    <div style={styles.cardContent}>Git, GitHub, Vercel</div>

                    <div style={styles.cardHeader}>
                        <FaServer /> Authentication / API
                    </div>
                    <div style={styles.cardContent}>JWT, OAuth2, Axios</div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
