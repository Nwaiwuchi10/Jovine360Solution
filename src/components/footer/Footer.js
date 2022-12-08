import React from "react";
import "./Footer.css";
import lg from "../../assests/images/lg.png";
import { FcGlobe, FcCallback, FcTemplate } from "react-icons/fc";
const Footer = () => {
  const ref = () => {
    window.location.href = "https://www.instagram.com/jovine360hub/";
  };
  const refs = () => {
    window.location.href = "https://twitter.com/Jovine360Hub";
  };
  const refer = () => {
    window.location.href =
      "https://web.facebook.com/profile.php?id=100088397130017";
  };
  const refers = () => {
    window.location.href = "https://www.linkedin.com/in/jovine-hub-654600258/";
  };
  const refo = () => {
    window.location.href =
      "https://www.google.com/search?q=jovine360&oq=jovine360&aqs=chrome..69i57j0i30i546j0i546l2j69i60l4.10371j1j4&sourceid=chrome&ie=UTF-8";
  };
  const refor = () => {
    window.location.href = "https://www.tiktok.com/@jovine360hub";
  };
  return (
    <div className="footer-main-div">
      <div className="div-mg-div">
        <div className="k">
          <img src={lg} className="ft-img-footer" alt="jjg" />

          {/* <h5 className=" kk">Jovine360 Workspace </h5> */}
        </div>

        <div className="disp-footer">
          <div>
            <div className="fk-fa">
              <FcGlobe className="fk-fa" />{" "}
            </div>
            <div className="font-div-d">
              5, Jayeola Ajatta street off Fatai Irawo Street Ajao Estate
            </div>
            <div className="h-div">Our Address</div>
          </div>
          <div>
            <div className="fk-fa">
              <FcTemplate className="fk-fa" />{" "}
            </div>
            <div className="font-div-d"> josiahorie@jovine360solutions.com</div>
            <div className="h-div">Our MailBox</div>
          </div>
          <div>
            <div className="fk-fa">
              <FcCallback className="fk-fa" />{" "}
            </div>
            <div className="font-div-d">+2348182004445</div>
            <div className="h-div">Our Phone</div>
          </div>
        </div>
        <div className="footer-dspt-div">
          <div>Home</div>
          <div>Services</div>
          <div>Portfolio</div>
          <div>Blog</div>
          <div>Contacts</div>
        </div>
        <div class="text-center p-3 ko">
          © 2022 Copyright:
          <strong style={{ color: "#e57817" }}>Jovine360Solutions.</strong> All
          Rights Reserved
        </div>
        <div class=" p-4 pb-0 logos">
          <section class="mb-4">
            <a
              onClick={refer}
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              onClick={refs}
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              onClick={refo}
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-google"></i>
            </a>

            <a
              onClick={ref}
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              onClick={refers}
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-linkedin-in"></i>
            </a>

            <a
              onClick={refor}
              class="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i class="fab fa-tiktok"></i>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Footer;
