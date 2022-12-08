import React from "react";
import { GrApple, GrSystem } from "react-icons/gr";
import { BsPhone, BsSmartwatch } from "react-icons/bs";
import { GiWireframeGlobe, GiLaptop } from "react-icons/gi";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import ty from "../../assests/images/ty.jpg";
import "./Fam.css";
const Fams = () => {
  return (
    <div
      className="fam-main-div"
      style={{
        backgroundImage: `linear-gradient( to bottom,
                   rgba(245, 246, 252, 0.52),
                   #002b36),url(${ty})`,
      }}
    >
      <div className="mg-div-fam">
        <div className="text-center nons">// TECHNOLOGY INDEX</div>
        <div className="text-center ng">
          We Deliver Solution with the Goal of Trusting Relationships
        </div>

        <div class="container mt-5 mb-3 ">
          <div className="rolD">
            <div className="dsp-fam-div">
              <div>
                <div>
                  <GiLaptop className="f-f" />
                </div>
                <div className="web">WEB</div>
              </div>
            </div>
            <div className="dsp-fam-div">
              <div>
                <div>
                  <BsPhone className="f-f" />
                </div>
                <div className="web">ANDRIOD</div>
              </div>
            </div>
            <div className="dsp-fam-div">
              <div>
                <div>
                  <GrApple className="f-f" />
                </div>
                <div className="web">IOS</div>
              </div>
            </div>
            <div className="dsp-fam-div">
              <div>
                <div>
                  <GiWireframeGlobe className="f-f" />
                </div>
                <div className="web">IOT</div>
              </div>
            </div>
            <div className="dsp-fam-div">
              <div>
                <div>
                  <GiWireframeGlobe className="f-f" />
                </div>
                <div className="web">IOT</div>
              </div>
            </div>
            <div className="dsp-fam-div">
              <div>
                <div>
                  <MdOutlineLaptopChromebook className="f-f" />
                </div>
                <div className="web">TV</div>
              </div>
            </div>
          </div>
          {/* <div className="row rolD">
            <div className="card nh ">
              <div>
                <div>
                  <GiLaptop className="f-f" />
                </div>
                <div className="web">WEB</div>
              </div>
            </div>

            <div className="card nh">
              <div>
                <div>
                  <BsPhone className="f-f" />
                </div>
                <div className="web">ANDRIOD</div>
              </div>
            </div>
            <div className="card nh">
              <div>
                <div>
                  <GrApple className="f-f" />
                </div>
                <div className="web">IOS</div>
              </div>
            </div>

            <div className="card nh">
              <div>
                <div>
                  <GiWireframeGlobe className="f-f" />
                </div>
                <div className="web">IOT</div>
              </div>
            </div>

            <div className="card nh">
              <div>
                <div>
                  <BsSmartwatch className="f-f" />
                </div>
                <div className="web">WEARELABLES</div>
              </div>
            </div>

            <div className="card nh">
              <div>
                <div>
                  <MdOutlineLaptopChromebook className="f-f" />
                </div>
                <div className="web">TV</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Fams;
