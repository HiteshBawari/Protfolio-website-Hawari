import { useState } from "react";

const aboutData = [
  {
    title: "Who I Am",
    desc: "Frontend developer focused on immersive UI and animations."
  },
  {
    title: "Experience",
    desc: "Worked on modern web apps with React, GSAP, and Three.js."
  },
  {
    title: "Goal",
    desc: "Building award-winning digital experiences."
  }
];

export default function About() {
  const [i, setI] = useState(0);

  return (
    <section id="about" className="section">
      <h2>About</h2>
<div className="aboutsec" >

      <div className="slider">
        <button onClick={() => setI((i - 1 + aboutData.length) % aboutData.length)}>◀</button>

        <div className="card large">
          <div className="carddiv">
          <h3>{aboutData[i].title}</h3>
          <p>{aboutData[i].desc}</p>
          </div>
        </div>

        <button onClick={() => setI((i + 1) % aboutData.length)}>▶</button>
      </div>
</div>
    </section>
  );
}