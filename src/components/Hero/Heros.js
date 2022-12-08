import React from "react";
import "./Hero.css";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import tct from "../../assests/images/tct.jpg";
import kdf from "../../assests/images/kdf.jpg";
import srt from "../../assests/images/srt.jpg";
import hgf from "../../assests/images/hgf.jpg";
import fd from "../../assests/images/fd.jpg";
const Heros = () => {
  return (
    <div
      className="Section-top"
      // style={{
      //   backgroundImage: `url(${tct})`,
      //   background: "linear-gradient((#6e6e6e),(#6e6e6e))",
      // }}
    >
      <div className="container tymix">
        <Rotate top right>
          <div className="hero-hh">//Only High-Quality Service</div>
          <div className="c-hh">SOFTWARE IT OUTSOURCING</div>
          <Bounce right cascade>
            {" "}
            <div className="jt-h">
              We are 100+ professional software engineers with more than 10years
              of experience in delivering superior products/
            </div>
          </Bounce>
          <Zoom right>
            {" "}
            <div className="learn-hero">LEARN MORE</div>
          </Zoom>
        </Rotate>
      </div>
    </div>
  );
};

export default Heros;
