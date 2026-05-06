import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    let frame;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    ref.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(10, 10, 32, 32);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
      wireframe: true
    });

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = () => {
      frame = requestAnimationFrame(animate);

      plane.rotation.x += 0.002;
      plane.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      renderer.dispose();
      ref.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section id="home" className="panel hero">
      <div ref={ref} className="three-bg"></div>

      <h1 className="glow">Frontend Developer</h1>
      <h3 className="glow">We are build Next-gen immersive web interfaces</h3>
      <button className="btn magnetic">Explore</button>
    </section>
  );
}