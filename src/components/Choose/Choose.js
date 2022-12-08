import React from "react";
import { IoArrowForward, IoLogoDesignernews } from "react-icons/io5";
import "./Choose.css";
import { SiAltiumdesigner, SiAntdesign, SiFsecure } from "react-icons/si";
import { GoDeviceMobile } from "react-icons/go";

import { FaMobile } from "react-icons/fa";
const Choose = () => {
  return (
    <div className="choose-main-div">
      <div className="pd-choose">
        <h6 className="text-center why">// WHY CHOOSE US</h6>
        <div>
          <h4 className="text-center bigy" style={{ color: "white" }}>
            Design the Concept of Your Business Idea Now
          </h4>
        </div>
        <div className="container ch-row">
          <div className="pique">
            <div className="pow">
              <div class=" pique-h">Product Design</div>
              <div className="piq">
                Our product design service lets you prototype, test and validate
                your ideas.
              </div>
              <div className="di-pique">
                {/* <IoArrowForward /> */}
                <h6>LEARN MORE</h6>{" "}
              </div>
              <div className="flo-fa">
                <div className="fvo">
                  <IoLogoDesignernews className="fvo2" />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="pique">
            <div className="pow">
              <div class=" pique-h">Web App Development</div>
              <div className="piq">
                Our product design service lets you prototype, test and validate
                your ideas.
              </div>
              <div className="di-pique">
                {/* <IoArrowForward /> */}
                <h6>LEARN MORE</h6>{" "}
              </div>
              <div className="flo-fa">
                <div className="fvo">
                  <SiAltiumdesigner className="fvo2" />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="pique">
            <div className="pow">
              <div class=" pique-h">Mobile Development</div>
              <div className="piq">
                Our product design service lets you prototype, test and validate
                your ideas.
              </div>
              <div className="di-pique">
                {/* <IoArrowForward /> */}
                <h6>LEARN MORE</h6>{" "}
              </div>
              <div className="flo-fa">
                <div className="fvo">
                  <GoDeviceMobile className="fvo2" />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="pique">
            <div className="pow">
              <div class=" pique-h">Website Design</div>
              <div className="piq">
                Our product design service lets you prototype, test and validate
                your ideas.
              </div>
              <div className="di-pique">
                {/* <IoArrowForward /> */}
                <h6>LEARN MORE</h6>{" "}
              </div>
              <div className="flo-fa">
                <div className="fvo">
                  <SiAntdesign className="fvo2" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
