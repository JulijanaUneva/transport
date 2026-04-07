import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ова ќе ја врати страницата на самиот врв при секоја промена на патеката (URL)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;