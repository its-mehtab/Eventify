import React from "react";
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";

function Home() {
  return (
    <>
      <Header />
      <section className="banner-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="banner-content text-center">
                <div className="common-head">
                  <span>
                    <img src="fdb" alt="" />
                    Will It Rain Tomorrow?
                  </span>
                  <h1>
                    book your tickets for <span>event</span>
                  </h1>
                </div>
                <p className="mt-3 mb-4">
                  Safe, secure, reliable ticketing. Your ticket to live
                  entertainment!
                </p>
                <div className="d-flex justify-content-center">
                  <Button>Grab Your Ticket</Button>
                  <Button btnColor={"bg-white text-dark ms-3"}>Join Now</Button>
                  {/* <a href="#" className="primary-btn ">
                    Join Now
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
