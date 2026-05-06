import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const sections = ["home", "about", "skills", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const menuRef = useRef(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  /* ACTIVE LINK (UNCHANGED) */
  useEffect(() => {
    const onScroll = () => {
      sections.forEach((id) => {
        const sec = document.getElementById(id);
        if (!sec) return;

        if (window.scrollY >= sec.offsetTop - 150) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== GSAP 3D MENU ANIMATION ===== */
  useEffect(() => {
    if (!menuRef.current) return;

    if (open) {
      gsap.fromTo(
        menuRef.current,
        {
          x: "100%",
          rotateY: 40,
          scale: 0.9,
          opacity: 0,
        },
        {
          x: "0%",
          rotateY: 0,
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        rotateY: 30,
        scale: 0.9,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, [open]);

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">Hawari</div>

      {/* DESKTOP NAV (UNCHANGED) */}
      <div className="nav-links">
        {sections.map((s) => (
          <a
            key={s}
            className={active === s ? "active" : ""}
            onClick={() => scrollTo(s)}
          >
            {s}
          </a>
        ))}
      </div>

      {/* MENU BUTTON */}
      <div
        className="menu-btn"
        onClick={() => setOpen(true)}
      >
        ☰
      </div>

      {/* 3D SIDE NAV */}
      <div className="mobile-menu" ref={menuRef}>

        <div className="mobile-header">
          <span>Menu</span>
          <div className="close-btn" onClick={() => setOpen(false)}>✕</div>
        </div>

        {sections.map((s) => (
          <p
            key={s}
            className={active === s ? "active" : ""}
            onClick={() => scrollTo(s)}
          >
            {s}
          </p>
        ))}

      </div>

    </nav>
  );
}  //latest good nav