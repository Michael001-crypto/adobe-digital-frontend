import { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[999] h-1 w-full bg-transparent">
      <div
        className="h-full bg-indigo-600 transition-all duration-300"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
