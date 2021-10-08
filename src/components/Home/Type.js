import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "<span style='color: #1ff10c;'>Backend Developer</span>",
          "<span style='color: #1ff10c;'>Cyber Security Researcher</span>",
          "<span style='color: #1ff10c;'>CTF Player</span>",
          "<span style='color: #1ff10c;'>The Greatest Person In IT</span>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        
      }}
    />
  );
}

export default Type;
