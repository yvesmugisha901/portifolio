import React from 'react';
import projects from '../data/projects';

function Projects({ darkMode }) {
    const styles = {
        section: {
            padding: '100px 20px',
            backgroundColor: darkMode ? '#111827' : '#f9fafb',
            color: darkMode ? '#e5e7eb' : '#111827',
            fontFamily: "'Inter', sans-serif",
        },
        container: {
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '50px',
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
        title: {
            fontSize: '1.8rem',
            fontWeight: 700,
            color: '#3b82f6',
            marginBottom: '12px',
        },
        description: {
            fontSize: '1rem',
            color: darkMode ? '#d1d5db' : '#374151',
            marginBottom: '10px',
            lineHeight: 1.6,
        },
        techStack: {
            fontSize: '0.95rem',
            color: darkMode ? '#9ca3af' : '#4b5563',
            marginBottom: '15px',
        },
        imagesContainer: {
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
            marginBottom: '15px',
        },
        image: {
            width: '300px',
            borderRadius: '8px',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
        },
        links: {
            display: 'flex',
            gap: '15px',
            flexWrap: 'wrap',
        },
        link: {
            color: '#3b82f6',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.3s, transform 0.3s',
        },
    };

    return (
        <section style={styles.section} id="projects">
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: darkMode ? '#f9fafb' : '#111827' }}>
                    Projects
                </h2>
            </div>

            <div style={styles.container}>
                {projects.map((project) => (
                    <div key={project.id} style={styles.card}>
                        <h3 style={styles.title}>{project.title}</h3>
                        <p style={styles.description}>{project.description}</p>
                        <p style={styles.techStack}>
                            <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                        </p>

                        <div style={styles.imagesContainer}>
                            {project.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    style={styles.image}
                                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                                />
                            ))}
                        </div>

                        <div style={styles.links}>
                            {project.liveDemo && project.liveDemo !== '#' && (
                                <a
                                    href={project.liveDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.link}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#3b82f6')}
                                >
                                    Live Demo
                                </a>
                            )}
                            {project.github && project.github !== '#' && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.link}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = '#2563eb')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = '#3b82f6')}
                                >
                                    GitHub
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
