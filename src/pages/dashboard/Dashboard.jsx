import React, { useEffect } from "react";
import BannerSection from "../home/components/banner-section/BannerSection";
import Button from "../../components/button/Button";
import { useAuth } from "../../hooks/useAuth";
import { useUser } from "../../context/User";

const Dashboard = () => {
  const { user, login, logout } = useUser(); // ✅ Use your context

  return (
    <BannerSection>
      <div className="row justify-content-center">
        <div className="col-md-11 col-xxl-9">
          <div className="banner-content text-center">
            <div className="common-head">
              <span>Live Entertainment Hub</span>
              {user ? (
                <h1>
                  Welcome, <br /> {user.name}
                </h1>
              ) : (
                <h1>Hey there!</h1>
              )}
              {user ? (
                ""
              ) : (
                <p className="fs-4">
                  You’re not signed in! Log in or create an account to get
                  started.
                </p>
              )}
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              {user ? (
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    logout();
                  }}
                  btnClass="mt-4"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    href="/login"
                    onClick={() => {
                      logout();
                    }}
                    btnClass="mt-4"
                  >
                    Login Now
                  </Button>
                  <Button
                    href="/register"
                    onClick={() => {
                      logout();
                    }}
                    btnClass="mt-4 ms-3"
                  >
                    Register Now
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </BannerSection>
  );
};

export default Dashboard;
