import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "./slider-data";
import Rotate from "react-reveal/Rotate";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import tct from "../../assests/images/tct.jpg";
import kdf from "../../assests/images/kdf.jpg";
import srt from "../../assests/images/srt.jpg";
import hgf from "../../assests/images/hgf.jpg";
import fd from "../../assests/images/fd.jpg";
import "./Zoom.css";
import "../Hero/Hero.css";
const Zoomer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="sliderd">
      <div className={currentSlide ? "slidey current" : "slidey"}>
        {currentSlide ? (
          <div>
            <figure id="nav-menu">
              <div
                className="image-div"
                style={{
                  backgroundImage: `url(${tct})`,
                  background: "linear-gradient((#6e6e6e),(#6e6e6e))",
                }}
              >
                <div className="container tymix">
                  <Rotate top right>
                    <div className="hero-hh">//Only High-Quality Service</div>
                    <div className="c-hh">SOFTWARE IT OUTSOURCING</div>
                    <Bounce right cascade>
                      {" "}
                      <div className="jt-h">
                        We are 100+ professional software engineers with more
                        than 10years of experience in delivering superior
                        products.
                      </div>
                    </Bounce>
                    <Zoom right>
                      {" "}
                      <div className="learn-hero">LEARN MORE</div>
                    </Zoom>
                  </Rotate>
                </div>
              </div>
              <div
                className="image-div"
                style={{
                  backgroundImage: `url(${kdf})`,
                }}
              >
                <div className="container tymix">
                  <Rotate top right>
                    <div className="hero-hh">
                      //Full Cycle Software Development
                    </div>
                    <Bounce right cascade>
                      {" "}
                      <div className="c-hh">FROM IDEA TO PRODUCT</div>
                    </Bounce>
                    <div className="jt-h">
                      We are 100+ professional software engineers with more than
                      10years of experience in delivering superior products/
                    </div>
                    <Zoom right>
                      {" "}
                      <div className="learn-hero">LEARN MORE</div>
                    </Zoom>
                  </Rotate>
                </div>
              </div>

              <div
                className="image-div"
                style={{
                  backgroundImage: `url(${srt})`,
                  background: "linear-gradient((#6e6e6e),(#6e6e6e))",
                }}
              >
                <div className="container tymix">
                  <Rotate top right>
                    <div className="hero-hh">
                      //Full Cycle Software Development
                    </div>
                    <Bounce right cascade>
                      {" "}
                      <div className="c-hh">FROM IDEA TO PRODUCT</div>
                    </Bounce>
                    <div className="jt-h">
                      We are 100+ professional software engineers with more than
                      10years of experience in delivering superior products/
                    </div>
                    <Zoom right>
                      {" "}
                      <div className="learn-hero">LEARN MORE</div>
                    </Zoom>
                  </Rotate>
                </div>
              </div>
              <div
                className="image-div"
                style={{
                  backgroundImage: `url(${hgf})`,
                  background: "linear-gradient((#6e6e6e),(#6e6e6e))",
                }}
              >
                <div className="container tymix">
                  <Rotate top right>
                    <div className="hero-hh">
                      //We Create Leading Digital Products
                    </div>
                    <Bounce right cascade>
                      <div className="c-hh">END-TO-END DEVELOPMENT</div>
                    </Bounce>
                    <div className="jt-h">
                      We are 100+ professional software engineers with more than
                      10years of experience in delivering superior products/
                    </div>
                    <Zoom left>
                      {" "}
                      <div className="learn-hero">LEARN MORE</div>
                    </Zoom>
                  </Rotate>
                </div>
              </div>
              <div
                className="image-div"
                style={{
                  backgroundImage: `url(${fd})`,
                  background: "linear-gradient((#6e6e6e),(#6e6e6e))",
                }}
              >
                <div className="container tymix">
                  <Rotate bottom right>
                    <div className="hero-hh">
                      //Full Cycle Software Development
                    </div>
                    <Bounce top cascade>
                      {" "}
                      <div className="c-hh">FROM IDEA TO PRODUCT</div>
                    </Bounce>
                    <div className="jt-h">
                      We are 100+ professional software engineers with more than
                      10years of experience in delivering superior products/
                    </div>
                    <Zoom left>
                      {" "}
                      <div className="learn-hero">LEARN MORE</div>
                    </Zoom>
                  </Rotate>
                </div>
              </div>
            </figure>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Zoomer;
