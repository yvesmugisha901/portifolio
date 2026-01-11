import React from 'react';

function About({ darkMode }) {
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
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
        },
        title: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: darkMode ? '#f9fafb' : '#111827',
            marginBottom: '20px',
            letterSpacing: '1px',
            animation: 'fadeIn 1.5s ease forwards',
        },
        tagline: {
            fontSize: '1.2rem',
            fontStyle: 'italic',
            color: darkMode ? '#60a5fa' : '#2563eb', // accent adapts to theme
            marginBottom: '30px',
            animation: 'fadeIn 1.8s ease forwards',
        },
        paragraph: {
            fontSize: '1.1rem',
            lineHeight: '1.8',
            color: darkMode ? '#d1d5db' : '#1f2937',
            animation: 'fadeIn 2s ease forwards',
        },
        floatingBackground: {
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: darkMode
                ? 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
            top: '-150px',
            left: '-100px',
            filter: 'blur(80px)',
            animation: 'float 12s ease-in-out infinite',
            zIndex: 1,
            transition: 'all 0.3s ease',
        },
        floatingBackground2: {
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: darkMode
                ? 'radial-gradient(circle, rgba(147,51,234,0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(147,51,234,0.05) 0%, transparent 70%)',
            bottom: '-100px',
            right: '-50px',
            filter: 'blur(70px)',
            animation: 'float 10s ease-in-out infinite',
            zIndex: 1,
            transition: 'all 0.3s ease',
        },
        keyframes: `
      @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
      @keyframes fadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
    `,
    };

    return (
        <section style={styles.section} id="about">
            <style>{styles.keyframes}</style>

            {/* Floating background shapes */}
            <div style={styles.floatingBackground}></div>
            <div style={styles.floatingBackground2}></div>

            <div style={styles.container}>
                <h2 style={styles.title}>About Me</h2>
                <div style={styles.tagline}>
                    Crafting solutions that solve problems and spark innovation
                </div>
                <p style={styles.paragraph}>
                    I’m <strong>NYIRINEZA Mugisha Yves</strong>, a Full-Stack Developer passionate about building web applications that are smart, intuitive, and efficient.
                    <br /><br />
                    I specialize in React, Node.js, and PHP, while exploring tools like TypeScript and Next.js to deliver modern, scalable software.
                    <br /><br />
                    My mission is to transform complex problems into seamless digital experiences. Let’s create something innovative and impactful together.
                </p>
            </div>
        </section>
    );
}

export default About;
