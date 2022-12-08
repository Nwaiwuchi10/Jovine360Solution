import React from "react";
import kdf from "../../assests/images/kdf.jpg";
import "./ContactUs.css";
const ContactUs = () => {
  return (
    <div
      className="contact-main-div"
      style={{
        backgroundImage: `url(${kdf})`,
      }}
    >
      <div className="img-over">
        <h6 className="contact-h">
          // We Carry More Than Just Good Coding Skills
        </h6>

        <div className="ds-conct">
          <div>
            <h4 className="hy-6">Let's Build Your Website!</h4>{" "}
          </div>
          <div className="c-us">CONTACT US</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
