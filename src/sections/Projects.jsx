import { useRef } from "react";

export default function Projects() {
  const ref = useRef();

  let isDown = false, startX, scrollLeft;

  const down = (e) => {
    isDown = true;
    startX = e.pageX - ref.current.offsetLeft;
    scrollLeft = ref.current.scrollLeft;
  };

  const move = (e) => {
    if (!isDown) return;
    const x = e.pageX - ref.current.offsetLeft;
    ref.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };

  return (
    <section id="projects" className="panel section">
      <h2>Projects</h2>

      <div
        className="drag-slider"
        ref={ref}
        onMouseDown={down}
        onMouseMove={move}
        onMouseUp={() => (isDown = false)}
        onMouseLeave={() => (isDown = false)}
      >
        <div className="card"><a href="">Night India Owl</a></div>
        <div className="card"><a href="">Clothing E-commerce Website</a></div>
        <div className="card"><a href="">Rent a Car E-commerce</a></div>
      </div>
    </section>
  );
}