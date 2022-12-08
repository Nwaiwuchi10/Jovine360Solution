import React from "react";
import { BiMobile } from "react-icons/bi";
import { GrCloudlinux } from "react-icons/gr";
import {
  SiGooglesearchconsole,
  SiJirasoftware,
  SiSemanticweb,
  SiWebpack,
} from "react-icons/si";
import "./Service.css";
const Service = () => {
  return (
    <div className="service-main-div">
      <div className="container">
        <div className="dsp-service-div">
          <div>
            <div className="our-sh">// OUR SERVICE</div>
            <div className="w-service-big">
              We Offer a Wide Variety of IT Services
            </div>
          </div>
          <div className="all-service">ALL SERVICES</div>
        </div>
        <div className="dsp-web-d">
          <div className="web-service-div">
            <div>
              <SiWebpack className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">Website Design</div>
            <div className="p-service">
              <p className="p1-service">
                {" "}
                Our Conversion-focused Expert Designers will build you a
                beautiful website suited to your business needs.
              </p>
              <br />
              <p className="p2-service">
                We assist you to gain credibility in the marketplace with a
                website that is built with your audience in mind.
              </p>
            </div>
          </div>

          <div className="web-service-div">
            <div>
              <SiSemanticweb className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">Website Development</div>
            <div className="p-service">
              <p className="p1-service">
                {" "}
                With our wealth of experience, we design, build and develop
                evolving web-based software.
              </p>
              <br />
              <p className="p2-service">
                <strong className="st-serve">Jovine360solutions</strong> is a
                company you can trust with the engineering of cost-effective,
                impactful, efficient, and easy-to-use tech products: web apps,
                web portals, and more.
              </p>
            </div>
          </div>

          <div className="web-service-div">
            <div>
              <BiMobile className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">Mobile Development</div>
            <div className="p-service">
              <p className="p1-service">
                {" "}
                The mobile space is a Business frontier to reach more audience
              </p>
              <br />
              <p className="p2-service">
                With our Professional mobile developers, we trust your ideas
                with a cutting-edge mobile-friendly solution.
              </p>
            </div>
          </div>

          <div className="web-service-div">
            <div>
              <SiJirasoftware className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">Software Integration</div>
            <div className="p-service">
              <p className="p1-service">
                {" "}
                Do you have existing software that needs to be scaled up to
                enhance its functionalities to meet your growing business needs?
                Or will you like to automate your business process?
              </p>
              <br />
              <p className="p2-service">
                We assist you to gain credibility in the marketplace with a
                website that is built with your audience in mind.
              </p>
            </div>
          </div>

          <div className="web-service-div">
            <div>
              <GrCloudlinux className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">Cloud Services</div>
            <div className="p-service">
              <p className="p1-service">
                Take your business to the cloud and enjoy the following:
              </p>
              <br />

              <p className="p2-service">
                <li> Cost Savings</li>
                <li> Security</li>
                <li> Flexibility</li>
                <li> Mobility</li>
                <li> Insight</li>
                <li> Increased Collaboration</li>
                <li> Quality Control</li>
                <li> Disaster Recovery</li>
                <li> Loss Prevention</li>
                <li> Automatic Software updates</li>
                <li> Competitive Edge</li>
                <li> Sustainability</li>
              </p>
            </div>
          </div>

          <div className="web-service-div">
            <div>
              <SiGooglesearchconsole className="icon-service" />{" "}
            </div>
            <div className="bold-h-service">Consultation</div>
            <div className="p-service">
              <p className="p1-service"> Do you have other technology needs?</p>
              <br />
              <p className="p2-service">Do Call Us Now.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
