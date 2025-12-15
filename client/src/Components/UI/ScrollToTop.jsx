import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ offset = 80 }) => { // offset in px (adjust to your navbar height)
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: "smooth"
    };

    // Adjust for fixed navbar
    const navbarHeight = offset;
    window.scrollTo({ top: 0 - navbarHeight, behavior: "smooth" });

    // Alternative: more precise way
    // const element = document.getElementById('top-of-page');
    // if (element) {
    //   const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    //   window.scrollTo({ top: y, behavior: "smooth" });
    // }
  }, [pathname, offset]);

  return null;
};

export default ScrollToTop;
