import React from "react";
import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="pt-10 pb-16 bg-blue-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <a href="#" className="w-32 inline-block">
              <img src={logo} alt="" className="mix-blend-darken" />
            </a>
          </div>
          <div className="grid grid-cols-3">
            <div>
              <h3 className="font-medium text-xl my-4">Resouces</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-xl my-4">Follow us</h3>
              <ul>
                <li>
                  <a href="#">Github</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-xl my-4">Legal</h3>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms and Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
