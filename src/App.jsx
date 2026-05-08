import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import useScrollEngine from "./hooks/useScrollEngine";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  useScrollEngine();

 return (
  <>
    <h1>Website Working</h1>
  </>
);
}
