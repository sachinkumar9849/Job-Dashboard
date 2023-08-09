import React from "react";
import { Link } from "react-router-dom";
import main from "../assets/images/main.svg";
// import main from '../assets/images/'
const Landing = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img src={main} alt="job hunt" className="img main-img" />
          </div>
          <div className="col-lg-6">
            <div className="info d-flex flex-column justify-content-center h-100">
              <h1>
                job <span>tracking</span> app
              </h1>
              <p>
                Provide an overview of the number of active jobs, completed
                jobs, pending jobs, and other relevant metrics.
              </p>
              <p>
                Display graphs or charts to show trends in job progress,
                completion rates, and other important data
              </p>
              <Link to="/register" className="btn_theme d-inline">
                Login/Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
