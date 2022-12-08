import React from "react";
import { GiRibbonMedal } from "react-icons/gi";
import vio from "../../assests/images/vio.jpg";
import { IoRibbon, IoRibbonOutline } from "react-icons/io5";
import "./About.css";
const About = () => {
  return (
    <div className="about-main-div">
      <div className="container">
        <div className="dspj-about">
          <div className="ds-div-f">
            <div className="comp-h">// ABOUT COMPANY</div>
            <div className="p-soft">Your Partner for Software Innovation</div>
            <div className="sent-h">
              <strong style={{ color: "#e57817" }}>Jovine360solutions</strong>{" "}
              provides a variety of professional IT services which includes
              Business Product Development, Training services, Software
              Development, mobile developm ent, web development, etc. Our Vision
              is to empower our clients to use the web to its full potential by
              providing affordable, effective, custom solutions.
            </div>
            <div className="dsp-dsp-div">
              <div>
                <div>
                  {" "}
                  <IoRibbonOutline className="ribbon" />
                </div>
                <div className="bv-div">Experience</div>
                <div>
                  <hr className="hr-f" />{" "}
                </div>
                <div className="sent-h">
                  Our great team of more than 1400 software experts.
                </div>
              </div>
              <div>
                <div>
                  <IoRibbon className="ribbon" />{" "}
                </div>
                <div className="bv-div">Quick Support</div>
                <div>
                  <hr className="hr-f" />{" "}
                </div>
                <div className="sent-h">
                  We’ll help you test bold new ideas while sharing your.
                </div>
              </div>
            </div>
          </div>
          <div className="d-img-div">
            <img src={vio} alt="jkk" className="abt-img-d" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
