export default function Skills() {
  const skills = ["React", "GSAP", "Three.js", "CSS", "JS"];

  return (
    <section id="skills" className="panel section">
      <h2>Skills</h2>

      <div className="grid">
        {skills.map((s) => (
          <div key={s} className="card">{s}</div>
        ))}
      </div>
    </section>
  );
}