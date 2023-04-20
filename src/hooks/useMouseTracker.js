import React, { useEffect, useState } from "react";

export function useMouseTracker() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    function onMouseMove(e) {
      setX(e.clientX);
      setY(e.clientY);
    }
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  });
  return { x, y };
}
