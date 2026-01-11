import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa'; // Importing icons

function Education({ darkMode }) {
    const styles = {
        section: {
            padding: '100px 20px',
            backgroundColor: darkMode ? '#111827' : '#f9fafb',
            color: darkMode ? '#e5e7eb' : '#111827',
            fontFamily: "'Inter', sans-serif",
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
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
            marginBottom: '50px',
            color: darkMode ? '#f9fafb' : '#111827',
            letterSpacing: '1px',
            textAlign: 'center',
            animation: 'fadeIn 1.5s ease forwards',
        },
        eduCard: {
            backgroundColor: darkMode ? '#1f2937' : '#ffffff',
            padding: '25px 30px',
            borderRadius: '12px',
            marginBottom: '30px',
            boxShadow: darkMode
                ? '0 10px 20px rgba(0,0,0,0.5)'
                : '0 10px 20px rgba(0,0,0,0.1)',
            borderLeft: `4px solid ${darkMode ? '#3b82f6' : '#2563eb'}`,
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px',
            animation: 'fadeIn 1.5s ease forwards',
        },
        icon: {
            fontSize: '2rem',
            color: darkMode ? '#3b82f6' : '#2563eb',
            marginTop: '5px',
        },
        eduContent: {
            flex: 1,
        },
        eduTitle: {
            fontSize: '1.5rem',
            fontWeight: 700,
            color: darkMode ? '#f9fafb' : '#111827',
            marginBottom: '5px',
        },
        eduDetails: {
            color: darkMode ? '#d1d5db' : '#374151',
            marginBottom: '3px',
            fontSize: '1rem',
            lineHeight: 1.6,
        },
        keyframes: `
      @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `,
    };

    return (
        <section style={styles.section} id="education">
            <style>{styles.keyframes}</style>

            <div style={styles.container}>
                <h2 style={styles.title}>Education</h2>

                {/* High School */}
                <div style={styles.eduCard}>
                    <FaGraduationCap style={styles.icon} />
                    <div style={styles.eduContent}>
                        <h3 style={styles.eduTitle}>World Mission High School</h3>
                        <p style={styles.eduDetails}>
                            Qualification: A2 High School Diploma — Software Development
                        </p>
                        <p style={styles.eduDetails}>
                            Years: 2020 - 2023 | Location: Kigali, Rwanda
                        </p>
                    </div>
                </div>

                {/* University */}
                <div style={styles.eduCard}>
                    <FaUniversity style={styles.icon} />
                    <div style={styles.eduContent}>
                        <h3 style={styles.eduTitle}>Tumba College (University)</h3>
                        <p style={styles.eduDetails}>Bachelor’s in Information Technology</p>
                        <p style={styles.eduDetails}>2024 – 2027 | Location: Kigali, Rwanda</p>
                        <p style={styles.eduDetails}>
                            Focus: Web development, Full-Stack applications, and AI/ML fundamentals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;
