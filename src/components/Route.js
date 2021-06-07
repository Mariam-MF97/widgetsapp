import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentpath] = useState(window.location.pathname);
  useEffect(() => {
    const onURLChange = () => {
      setCurrentpath(window.location.pathname);
    };
    window.addEventListener("popstate", onURLChange);
    return () => {
      window.removeEventListener("popstate", onURLChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
