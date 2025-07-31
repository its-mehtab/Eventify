import React, { useState } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import CustomInput from "../../components/custom-input/CustomInput";
import { assets } from "../../assets/assets";
import "./login.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useUser } from "../../hooks/useUser";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { verifyUser, actionLoading, actionError, actionSuccess } = useUser();
  const { user, login, loading } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(loginData.email, loginData.password);
    console.log(user);
  };

  return (
    <BannerSection className="sp-tb">
      <div className="row justify-content-center mt-4 pt-5 pb-md-4">
        <div className="col-md-7">
          <div className="login-wrap form-wrap text-center">
            <h3>Welcome back</h3>
            <p className="text-secondary">Login with your eventify account</p>
            <div className="row">
              <div className="col-md-12 mt-1">
                <div className="position-relative">
                  <assets.EmailIcon color="#ff0a54" />
                  <CustomInput
                    type="email"
                    name="email"
                    value={loginData.email}
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
                    value={loginData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end mt-4">
                <Link
                  to="/forgot"
                  className="text-dark text-decoration-underline"
                >
                  Forget Password?
                </Link>
              </div>
              <div className="d-flex mt-4">
                <Button
                  onClick={handleSubmit}
                  btnClass="btn-dark w-100 text-center py-3"
                >
                  Login
                </Button>
              </div>
              <div className="mt-4 text-center text-secondary">
                <p>
                  Don’t Have An Account?{" "}
                  <Link
                    to="/register"
                    className="text-danger text-decoration-underline"
                  >
                    Register Now
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

export default Login;
