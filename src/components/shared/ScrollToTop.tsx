import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Only reset scroll when entering a project detail page.
        // When navigating back to "/" the portfolio stays exactly where it is.
        if (pathname.startsWith("/project/")) {
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;

