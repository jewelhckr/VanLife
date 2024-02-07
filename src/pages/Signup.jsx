import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fef7ec" }}>
        <nav className="navbar p-4">
          <div className="container-fluid ">
            <Link
              to={"/"}
              className="text-decoration-none navbar-brand  fw-bold "
            >
              #VANLIFE
            </Link>

            <ul
              className="col-md-3 gap-3  d-flex list-unstyled"
              style={{ cursor: "pointer" }}
            >
              <Link to={"/host"} className="text-decoration-none text-black ">
                Host
              </Link>
              <Link to={"/about"} className="text-decoration-none text-black ">
                About
              </Link>
              <Link to={"/vans"} className="text-decoration-none text-black ">
                Vans
              </Link>
              <i className="bi bi-person-circle"></i>
            </ul>
          </div>
        </nav>
        <br />
        <div className="">
          <h5 className="text-center fw-bold fs-2 mt-2">Sign up vans life..</h5>
          <br />
          <br />

          <div style={{ margin: "0px  5%" }}>
            <input
              className="form-control my-2"
              type="text"
              placeholder="Enter full name"
            />

            <input
              className="form-control my-2"
              type="text"
              placeholder="+234"
            />

            <input
              className="form-control my-2"
              type="text"
              placeholder="Email"
            />

            <input
              className="form-control my-2"
              type="text"
              placeholder="Gender"
            />
            <input
              className="form-control my-2"
              type="text"
              placeholder="Password"
            />
            <button
              className="btn btn-transparent  w-100 fw-bold p-3 text-white"
              style={{ backgroundColor: "#fe8d38", margin: "5% 0% " }}
            >
              Sign up
            </button>

            <br />
            <br />

            <div className="text-center">
              <span>Already have an account?</span>
              <Link className="text-decoration-none" to={'/login'}>
              
              <span  style={{ color: "#fe8d38" }}>Login here</span>
              </Link>
            </div>
            <br />
            <br />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Signup;
