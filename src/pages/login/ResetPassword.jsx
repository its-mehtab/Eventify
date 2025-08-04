import React, { useState } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import CustomInput from "../../components/custom-input/CustomInput";
import { assets } from "../../assets/assets";
import "./login.css";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useUserService } from "../../hooks/useUserService";

const ResetPassword = () => {
  const [userExists, setUserExists] = useState(false);
  const [resetPassword, setResetPassword] = useState({});
  const [userToReset, setUserToReset] = useState({});
  const { verifyUser, modifyUser } = useUserService();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const user = await verifyUser(resetPassword.email);

    if (user) {
      setUserToReset(user);
      setUserExists(true);
    } else {
      setUserToReset("");
    }

    setResetPassword({});
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (resetPassword.password) {
      const updatedUser = await modifyUser(userToReset.id, {
        password: resetPassword.password,
      });
    }
  };

  return (
    <BannerSection className="sp-tb">
      <div className="row justify-content-center mt-4 pt-5 pb-md-4">
        <div className="col-md-7">
          <div className="login-wrap form-wrap text-center">
            <h3>Forgot Password?</h3>
            <p className="text-secondary">
              Reset your eventify account password
            </p>
            <div className="row">
              {userExists || (
                <>
                  <div className="col-md-12 mt-1">
                    {!userToReset ? (
                      <p className="text-danger text-start mt-2">
                        Email does not exists, Please try again!!
                      </p>
                    ) : (
                      ""
                    )}
                    <div className="position-relative">
                      <assets.EmailIcon color="#ff0a54" />
                      <CustomInput
                        type="email"
                        name="email"
                        value={resetPassword.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <Button
                      onClick={handleEmailSubmit}
                      btnClass="btn-dark w-100 text-center py-3"
                    >
                      Reset Now
                    </Button>
                  </div>
                </>
              )}

              {userExists && (
                <>
                  <div className="col-md-12 mt-1">
                    <div className="position-relative">
                      <assets.PasswordIcon color="#ff0a54" />
                      <CustomInput
                        type="password"
                        name="password"
                        value={resetPassword.password}
                        onChange={handleChange}
                        placeholder="Set Password"
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <Button
                      onClick={handlePasswordSubmit}
                      btnClass="btn-dark w-100 text-center py-3"
                    >
                      Reset Now
                    </Button>
                  </div>
                </>
              )}

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

export default ResetPassword;
