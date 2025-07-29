import React, { useState } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import CustomInput from "../../components/custom-input/CustomInput";
import { assets } from "../../assets/assets";
import "./login.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData);
  };

  return (
    <BannerSection className="sp-tb">
      <div className="row justify-content-center mt-4 pt-5 pb-md-4">
        <div className="col-md-7">
          <div className="login-wrap form-wrap text-center">
            <h3>Register Now</h3>
            <p className="text-secondary">Sign up with eventify account</p>
            <div className="row">
              <div className="col-md-12 mt-1">
                <div className="position-relative">
                  <assets.PersonIcon color="#ff0a54" />
                  <CustomInput
                    name="name"
                    value={signUpData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 mt-1">
                <div className="position-relative">
                  <assets.EmailIcon color="#ff0a54" />
                  <CustomInput
                    type="email"
                    name="email"
                    value={signUpData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="col-md-12 mt-1">
                <div className="position-relative">
                  <assets.PasswordIcon color="#ff0a54" />
                  <CustomInput
                    type="password"
                    name="password"
                    value={signUpData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="d-flex mt-4">
                <Button
                  onClick={handleSubmit}
                  href=""
                  btnClass="btn-dark w-100 text-center py-3"
                >
                  Register Now
                </Button>
              </div>
              <div className="mt-4 text-center text-secondary">
                <p>
                  Have An Account?
                  <Link
                    to="/login"
                    className="text-danger text-decoration-underline ms-2"
                  >
                    Login Now
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default SignUp;
