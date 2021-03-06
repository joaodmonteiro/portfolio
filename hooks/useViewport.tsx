import { useEffect, useState } from "react";

const useViewport = () => {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const doc = document.documentElement;
    doc.style.setProperty("$doc-height", `${height}px`);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      doc.style.setProperty("$doc-height", `${height}px`);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, height };
};

export default useViewport;
