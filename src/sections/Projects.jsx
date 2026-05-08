import { useEffect, useRef, useState } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Night India Owl",
    desc: "People Night Work  security platform.",
    link: "https://night-owl-india-website.vercel.app/",
    tech: "• Html • CSS • GSAP • javascript"
  },
  {
    title: "Clothing E-Commerce",
    desc: "Premium fashion shopping experience.",
    link: "https://clothing-brand-hawari.vercel.app/",
    tech: "• Html • CSS • JavaScript"
  },
  {
    title: "Rent A Car",
    desc: "Luxury car rental booking platform.",
    link: "https://rent-car-beige.vercel.app/",
    tech: "• Html • CSS • JavaScript"
  },
  {
    title: "3D Portfolio",
    desc: "Interactive cinematic portfolio website.",
    link: "https://my-protfolio-website-drab.vercel.app",
    tech: "• Html • CSS • JavaScript • Three.js • Blender"
  }
];

export default function Projects() {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  let startX = 0;
  let scrollLeft = 0;

  useEffect(() => {
    const slider = sliderRef.current;

    const autoSlide = setInterval(() => {
      if (!isDragging) {
        slider.scrollLeft += 1.2;

        if (
          slider.scrollLeft + slider.clientWidth >=
          slider.scrollWidth
        ) {
          slider.scrollLeft = 0;
        }
      }
    }, 15);

    return () => clearInterval(autoSlide);
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Featured Projects</h2>
        <p>Professional modern projects with cinematic UI experiences.</p>
      </div>

      <div
        className="projects-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="card-glow"></div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <span>{project.tech}</span>

            <a href={project.link} target="_blank">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
