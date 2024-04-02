import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AppWrapper({ children }) {
  const location = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);
  return children;
}

export default AppWrapper;

