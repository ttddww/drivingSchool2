import React from "react";
import { Link } from "react-router-dom";
import car from "../../assets/image/pexels-didsss-1405665.jpg";

function Home() {
  return (
    <div className="w-100 vh-100 position-relative">
      {/* Background Image */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: `url(${car})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      ></div>

      {/* Dark Overlay (IMPORTANT for readability) */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 2,
        }}
      ></div>

      {/* Content */}
      <section
        className="position-relative text-white d-flex align-items-center justify-content-center h-100"
        style={{ zIndex: 3 }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">
            Master the Road with{" "}
            <span className="text-warning">Confidence</span>
          </h1>

          <p className="lead mt-3">
            Professional driving instruction for teens and adults. Learn safe
            driving habits that last a lifetime.
          </p>

          <div className="mt-4">
            <Link to="/register" className="btn btn-primary btn-lg me-3">
              Start Your Journey
            </Link>
            <Link to="/about" className="btn btn-outline-light btn-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
