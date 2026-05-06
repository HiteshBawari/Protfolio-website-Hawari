import { useEffect } from "react";

export default function Cursor(){
  useEffect(()=>{
    const c = document.querySelector(".cursor");

    window.addEventListener("mousemove", e=>{
      c.style.left = e.clientX+"px";
      c.style.top = e.clientY+"px";
    });
  },[]);

  return <div className="cursor"></div>;
}