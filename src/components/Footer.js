import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h3>HartleyLab</h3>
            <ui className="list-unstyled">
            

              <li>Above TATA Motors Showroom,</li>
              <li>Baner, Pune, MH, India 411045</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>About</h4>
            <ui className="list-unstyled">
              <li>About Us</li>
              <li>Our Philosophy</li>
              <li>Our Values</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>Our Team</li>
              <li>Open Positions</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;