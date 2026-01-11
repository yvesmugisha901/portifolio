import React, { useEffect, useState } from 'react';

// Load Inter font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

function Hero({ darkMode }) {
    const phrases = [
        'Full-Stack Developer',
        'Curious Learner | AI Enthusiast',
        'Passionate About Building Scalable Apps',
    ];

    const [current, setCurrent] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [hoveredBtn, setHoveredBtn] = useState(null);

    // Typewriter effect
    useEffect(() => {
        const fullText = phrases[current];
        let timeout;

        if (!isDeleting && displayedText.length < fullText.length) {
            timeout = setTimeout(() => setDisplayedText(fullText.slice(0, displayedText.length + 1)), 120);
        } else if (isDeleting && displayedText.length > 0) {
            timeout = setTimeout(() => setDisplayedText(fullText.slice(0, displayedText.length - 1)), 60);
        } else if (!isDeleting && displayedText.length === fullText.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayedText.length === 0) {
            setIsDeleting(false);
            setCurrent((prev) => (prev + 1) % phrases.length);
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, current, phrases]);

    const scrollTo = (id) => {
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    const styles = {
        hero: {
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: darkMode ? '#111827' : '#f9fafb',
            padding: '0 20px',
            position: 'relative',
            fontFamily: "'Inter', sans-serif",
            overflow: 'hidden',
            flexDirection: 'column',
            color: darkMode ? '#f9fafb' : '#111827',
            transition: 'all 0.3s ease',
        },
        heroContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '50px',
            flexWrap: 'wrap',
            maxWidth: '1000px',
            position: 'relative',
            zIndex: 2,
        },
        heroImageContainer: {
            position: 'relative',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: `4px solid ${darkMode ? '#3b82f6' : '#2563eb'}`,
            boxShadow: darkMode
                ? '0 15px 30px rgba(0,0,0,0.6)'
                : '0 15px 30px rgba(0,0,0,0.3)',
            animation: 'float 6s ease-in-out infinite',
            transition: 'all 0.3s ease',
        },
        heroImage: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        glowCircle: {
            position: 'absolute',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)',
            top: '-15px',
            left: '-15px',
            zIndex: -1,
            filter: 'blur(30px)',
        },
        heroText: {
            maxWidth: '600px',
            textAlign: 'center',
        },
        heroName: {
            fontSize: '3rem',
            fontWeight: 700,
            marginBottom: '10px',
            textShadow: darkMode ? '2px 2px 10px rgba(0,0,0,0.3)' : '2px 2px 10px rgba(0,0,0,0.15)',
            animation: 'fadeIn 1.5s ease forwards',
            color: darkMode ? '#f9fafb' : '#111827',
        },
        heroRole: {
            fontSize: '1.5rem',
            color: '#3b82f6',
            minHeight: '35px',
            fontWeight: 600,
            marginBottom: '20px',
            animation: 'fadeIn 2s ease forwards',
        },
        heroBio: {
            fontSize: '1.1rem',
            color: darkMode ? '#d1d5db' : '#4b5563',
            lineHeight: '1.7',
            marginBottom: '30px',
        },
        heroButtons: {
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        btn: {
            padding: '12px 30px',
            borderRadius: '6px',
            fontWeight: 600,
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
        },
        btnPrimary: {
            backgroundColor: '#3b82f6',
            color: '#fff',
        },
        btnSecondary: {
            backgroundColor: 'transparent',
            color: '#3b82f6',
            border: '2px solid #3b82f6',
        },
        floatingBackground: {
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
            top: '-100px',
            left: '-150px',
            zIndex: 1,
            filter: 'blur(80px)',
            animation: 'float 10s ease-in-out infinite',
        },
        floatingBackground2: {
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, transparent 70%)',
            bottom: '-50px',
            right: '-50px',
            zIndex: 1,
            filter: 'blur(60px)',
            animation: 'float 8s ease-in-out infinite',
        },
        scrollDown: {
            color: darkMode ? '#9ca3af' : '#6b7280',
            marginTop: '20px',
            fontSize: '1.2rem',
            animation: 'bounce 2s infinite',
        },
        keyframes: `
      @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-15px);} }
      @keyframes bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(10px);} }
      @keyframes fadeIn { 0%{opacity:0;transform:translateY(20px);} 100%{opacity:1;transform:translateY(0);} }
    `,
    };

    return (
        <section style={styles.hero}>
            <style>{styles.keyframes}</style>

            <div style={styles.floatingBackground}></div>
            <div style={styles.floatingBackground2}></div>

            <div style={styles.heroContainer}>
                <div style={styles.heroImageContainer}>
                    <img src="/images/profile.jpeg" alt="Yves Mugisha" style={styles.heroImage} />
                    <div style={styles.glowCircle}></div>
                </div>

                <div style={styles.heroText}>
                    <h1 style={styles.heroName}>NYIRINEZA Mugisha Yves</h1>
                    <h2 style={styles.heroRole}>{displayedText}</h2>
                    <p style={styles.heroBio}>
                        I craft scalable, efficient, and visually appealing web apps. Constantly exploring new
                        technologies, solving real-world problems, and pushing my limits as a developer.
                    </p>

                    <div style={styles.heroButtons}>
                        {['#projects', '#contact'].map((link, idx) => (
                            <a
                                key={link}
                                href={link}
                                style={{
                                    ...styles.btn,
                                    ...(idx === 0 ? styles.btnPrimary : styles.btnSecondary),
                                    ...(hoveredBtn === idx
                                        ? idx === 0
                                            ? { backgroundColor: '#2563eb', transform: 'translateY(-3px)', boxShadow: '0 8px 20px rgba(37,99,235,0.5)' }
                                            : { backgroundColor: '#3b82f6', color: '#fff', transform: 'translateY(-3px)', boxShadow: '0 8px 20px rgba(59,130,246,0.5)' }
                                        : {}),
                                }}
                                onMouseEnter={() => setHoveredBtn(idx)}
                                onMouseLeave={() => setHoveredBtn(null)}
                                onClick={() => scrollTo(link)}
                            >
                                {idx === 0 ? 'View Projects' : 'Contact Me'}
                            </a>
                        ))}
                    </div>

                    <div style={styles.scrollDown}>&#8595; Scroll Down</div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
