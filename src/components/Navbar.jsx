import React, { useState, useEffect } from "react";

function Navbar({ darkMode, toggleTheme }) {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#hero");
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            navItems.forEach((item) => {
                const section = document.querySelector(item.href);
                if (section) {
                    const top = section.offsetTop - 80;
                    const bottom = top + section.offsetHeight;
                    if (window.scrollY >= top && window.scrollY < bottom) {
                        setActive(item.href);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id) => {
        const section = document.querySelector(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false); // close menu on click
    };

    // Colors
    const navBg = scrolled ? (darkMode ? "#111827" : "#e5e7eb") : "transparent";
    const navTextColor = darkMode ? "#f9fafb" : "#111827";

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                backgroundColor: navBg,
                boxShadow: scrolled ? "0 5px 15px rgba(0,0,0,0.3)" : "none",
                transition: "all 0.3s ease",
                fontFamily: "'Inter', sans-serif",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    padding: "20px 25px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                {/* Logo / Name */}
                <div style={{ fontWeight: 700, fontSize: "1.3rem", color: "#3b82f6" }}>
                    NYIRINEZA Yves
                </div>

                {/* Desktop Menu */}
                <ul
                    style={{
                        display: "flex",
                        gap: "25px",
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        alignItems: "center",
                    }}
                    className="desktop-menu"
                >
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <button
                                onClick={() => scrollTo(item.href)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    color: active === item.href ? "#3b82f6" : navTextColor,
                                    borderBottom: active === item.href ? "2px solid #3b82f6" : "none",
                                    paddingBottom: "2px",
                                    transition: "color 0.3s, border-bottom 0.3s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#3b82f6")}
                                onMouseLeave={(e) =>
                                    (e.target.style.color = active === item.href ? "#3b82f6" : navTextColor)
                                }
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}

                    {/* Theme Toggle */}
                    <li style={{ marginLeft: "20px" }}>
                        <div
                            onClick={toggleTheme}
                            style={{
                                width: "50px",
                                height: "26px",
                                background: darkMode ? "#3b82f6" : "#d1d5db",
                                borderRadius: "50px",
                                position: "relative",
                                cursor: "pointer",
                                transition: "background 0.3s",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "2px",
                                    left: darkMode ? "26px" : "2px",
                                    width: "22px",
                                    height: "22px",
                                    background: "#fff",
                                    borderRadius: "50%",
                                    transition: "left 0.3s",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                                }}
                            />
                        </div>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <div
                    style={{ display: "none", cursor: "pointer" }}
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <div style={{ fontSize: "1.8rem", color: navTextColor }}>☰</div>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        padding: "15px 25px",
                        background: navBg,
                    }}
                >
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <button
                                onClick={() => scrollTo(item.href)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    fontSize: "1rem",
                                    fontWeight: 500,
                                    cursor: "pointer",
                                    color: active === item.href ? "#3b82f6" : navTextColor,
                                    borderBottom: active === item.href ? "2px solid #3b82f6" : "none",
                                    paddingBottom: "2px",
                                    transition: "color 0.3s, border-bottom 0.3s",
                                }}
                            >
                                {item.name}
                            </button>
                        </li>
                    ))}

                    {/* Theme toggle for mobile */}
                    <li>
                        <div
                            onClick={toggleTheme}
                            style={{
                                width: "50px",
                                height: "26px",
                                background: darkMode ? "#3b82f6" : "#d1d5db",
                                borderRadius: "50px",
                                position: "relative",
                                cursor: "pointer",
                                transition: "background 0.3s",
                            }}
                        >
                            <div
                                style={{
                                    position: "absolute",
                                    top: "2px",
                                    left: darkMode ? "26px" : "2px",
                                    width: "22px",
                                    height: "22px",
                                    background: "#fff",
                                    borderRadius: "50%",
                                    transition: "left 0.3s",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                                }}
                            />
                        </div>
                    </li>
                </ul>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none; }
          .hamburger { display: block; }
        }
      `}</style>
        </nav>
    );
}

export default Navbar;
