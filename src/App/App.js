import React, { useEffect } from "react";
import AOS from "aos";
import AnimatedCursor from "react-animated-cursor";

import MyRoutes from "../router/Routes";
import ScrollToTop from "../components/ScrollToTop";


const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="255, 160, 1"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <ScrollToTop />
      <MyRoutes />
    </>
  );
};

export default App;
