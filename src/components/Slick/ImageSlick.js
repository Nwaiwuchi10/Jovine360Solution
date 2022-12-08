import React from "react";
import { Carousel } from "react-bootstrap";
import ty from "../../assests/images/ty.jpg";

import cg from "../../assests/images/cg.jpg";
import "./ImageSlick.css";
const ImageSlick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 50,
  };
  return (
    <div className="slick-main-div">
      <div className="container">
        <Carousel slide={false}>
          <Carousel.Item>
            <div className="dif">
              <img src={cg} alt="jk" className="nert" />
              <img src={cg} alt="jk" className="nert" />
              <img src={cg} alt="jk" className="nert" />
              <img src={cg} alt="jk" className="nert" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img src={ty} alt="jk" className="nert" />
            <img src={ty} alt="jk" className="nert" />
            <img src={ty} alt="jk" className="nert" />
            <img src={ty} alt="jk" className="nert" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={cg} alt="jk" className="nert" />
            <img src={cg} alt="jk" className="nert" />
            <img src={cg} alt="jk" className="nert" />
            <img src={cg} alt="jk" className="nert" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={cg} alt="jk" className="nert" />
            <img src={cg} alt="jk" className="nert" />
            <img src={cg} alt="jk" className="nert" />
            <img src={cg} alt="jk" className="nert" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageSlick;
