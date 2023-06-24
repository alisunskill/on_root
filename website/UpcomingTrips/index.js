import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export default () => {
  return (
    <div className="row ">
        <h1 className="dark bold pb-3 text-center mb-4">Upcoming Trips</h1>
      <div className="col-lg-3"></div>
      <div className="col-lg-6 h-full">
        <div className="w-100">
          <Dropdown className="w-100">
            <Dropdown.Toggle
              className="w-100 d-flex justify-content-between  align-center px-3 py-3"
              style={{
                background: "#F5F5F5",
                color: "#000",
                border: "none",
                borderRadius: "12px",
              }}
              id="dropdown-basic"
            >
              Asia
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="w-100 pt-4">
          <Dropdown className="w-100">
            <Dropdown.Toggle
              className="w-100 d-flex justify-content-between  align-center px-3 py-3"
              style={{
                background: "#F5F5F5",
                color: "#000",
                border: "none",
                borderRadius: "12px",
              }}
              id="dropdown-basic"
            >
              Asia
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="w-100 pt-4">
          <Dropdown className="w-100">
            <Dropdown.Toggle
              className="w-100 d-flex justify-content-between  align-center px-3 py-3"
              style={{
                background: "#F5F5F5",
                color: "#000",
                border: "none",
                borderRadius: "12px",
              }}
              id="dropdown-basic"
            >
              Asia
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-100">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <div className="col-lg-3"></div>
    </div>
  );
};
