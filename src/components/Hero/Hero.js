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
import { Carousel } from "react-bootstrap";
const Hero = () => {
  return (
    <div>
      <div className="slider" id="navbar">
        <figure id="nav-menu">
          <Carousel slide={false}>
            <Carousel.Item>
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
            </Carousel.Item>
            <Carousel.Item>
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
            </Carousel.Item>
            <Carousel.Item>
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
            </Carousel.Item>
            <Carousel.Item>
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
            </Carousel.Item>
            <Carousel.Item>
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
            </Carousel.Item>
          </Carousel>
        </figure>
      </div>
    </div>
  );
};

export default Hero;
// import React from "react";
// import { Carousel } from "react-bootstrap";
// import "./Hero.css";
// import tct from "../../assests/images/tct.jpg";
// import kdf from "../../assests/images/kdf.jpg";
// import srt from "../../assests/images/srt.jpg";
// import hgf from "../../assests/images/hgf.jpg";
// const Hero = () => {
//   return (
//     <div className="hero-main-div">
//       <div>
//         <Carousel slide={false}>
//           <Carousel.Item>
//             <div
//               className="div-hero-pix"
//               style={{
//                 backgroundImage: `url(${kdf})`,
//               }}
//             >

//             </div>
//           </Carousel.Item>
//           <Carousel.Item>
//             {" "}
//             <div
//               className="div-hero-pix"
//               style={{
//                 backgroundImage: `url(${tct})`,
//               }}
//             ></div>
//           </Carousel.Item>
//           <Carousel.Item>
//             {" "}
//             <div
//               className="div-hero-pix"
//               style={{
//                 backgroundImage: `url(${srt})`,
//               }}
//             ></div>
//           </Carousel.Item>
//           <Carousel.Item>
//             {" "}
//             <div
//               className="div-hero-pix"
//               style={{
//                 backgroundImage: `url(${hgf})`,
//               }}
//             ></div>
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Hero;
