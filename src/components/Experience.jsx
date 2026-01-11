import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

function Experience({ darkMode }) {
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
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: darkMode ? '#f9fafb' : '#111827',
            marginBottom: '40px',
            letterSpacing: '1px',
            animation: 'fadeIn 1.5s ease forwards',
            textAlign: 'center',
        },
        jobCard: {
            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: darkMode
                ? '0 10px 25px rgba(0,0,0,0.4)'
                : '0 10px 25px rgba(0,0,0,0.1)',
            marginBottom: '30px',
            transition: 'all 0.3s ease',
        },
        jobHeader: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '10px',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: '#3b82f6',
        },
        jobRole: {
            color: darkMode ? '#d1d5db' : '#374151',
            fontSize: '1rem',
            lineHeight: '1.6',
            marginBottom: '5px',
        },
        duration: {
            fontSize: '0.95rem',
            color: darkMode ? '#9ca3af' : '#6b7280',
            marginBottom: '5px',
            fontStyle: 'italic',
        },
        keyframes: `
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `,
    };

    return (
        <section style={styles.section} id="experience">
            <style>{styles.keyframes}</style>

            <div style={styles.container}>
                <h2 style={styles.title}>Experience</h2>

                {/* Internship */}
                <div style={styles.jobCard}>
                    <div style={styles.jobHeader}>
                        <FaBriefcase /> Goodlink Solutions Ltd (Inkomane)
                    </div>
                    <p style={styles.jobRole}>
                        Full-Stack Developer (Internship)
                    </p>
                    <p style={styles.jobRole}>
                        Duties: Developed web applications, implemented front-end and back-end functionality, worked with React, Node.js, PHP, and PostgreSQL, and contributed to project optimization and UI improvements.
                    </p>
                    <p style={styles.duration}>
                        Duration: [2025]
                    </p>
                </div>

                {/* You can duplicate jobCard for more experience entries */}
            </div>
        </section>
    );
}

export default Experience;
