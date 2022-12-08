import React from "react";
import Marquee from "react-fast-marquee";
import nafas from "../../assests/images/nafas.png";
import nafa from "../../assests/images/nafa.png";
import lg from "../../assests/images/lg.png";
import "./Partners.css";
import { Col, Row } from "react-bootstrap";

const Partners = () => {
  return (
    <div style={{ background: " aliceblue" }}>
      {" "}
      <div className="m-partners">
        <Marquee
          direction="left"
          pauseOnHover="true"
          style={{ background: " aliceblue" }}
        >
          <div className="img-wrap">
            <img src={nafa} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={nafas} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={lg} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={nafa} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={nafas} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={lg} alt="nns" className="parnet-img" />
          </div>
          <div className="img-wrap">
            <img src={nafa} alt="nns" className="parnet-img" />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Partners;
