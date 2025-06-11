"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <div className="flex text-start text-blue-500   items-center   ">
      <TypeAnimation
        sequence={[
          "a Frontend Developer.",
          2000,
          "a React Developer.",
          2000,
          "a Full Stack Developer.",
          2000,
        ]}
        wrapper="span"
        speed={40}
        style={{ fontSize: "2.5rem", fontWeight: "bold " }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Typewriter;
