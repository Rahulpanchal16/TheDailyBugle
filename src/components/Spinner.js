import React from "react";

const Spinner = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ height: "200px", width: "200px" }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
