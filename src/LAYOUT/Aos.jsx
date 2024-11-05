import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Aos = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <div className=""></div>;
};

export default Aos;
