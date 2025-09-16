import React from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../assets/d79fca11-ca9e-4938-86be-cc3a93d4439f.json";

const Loader = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#FFFFFF"
  }}>
    <Lottie 
      animationData={loaderAnimation} 
      loop={true} 
      style={{ width: 200, height: 200 }} // change these numbers
    />
  </div>
);

export default Loader;
