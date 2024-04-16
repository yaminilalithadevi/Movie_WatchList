import React, { useState } from "react";
import { BsHouseDoorFill, BsPersonCircle } from "react-icons/bs";
import { Dropdown, Modal, Button } from "react-bootstrap";
import { useMyContext } from "../context/Provider";
import image from "../images (1).png";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../index.css";
import SignUp from "./SignUp";

const Sidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const { user, signOut, list,WatchListName } = useMyContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!user) {
      setShowModal(!showModal);
    } else {
      signOut();
    }
  };
  const handleWatchlistClick = () => {
    navigate("/watchlist");
  };

  const homepage = () => {
    navigate("/");
  };

  return (
    <div className="" id="sidebar">
      <h1 className="text-center heading" style={{ color: "#FF204E" }}>
        WatchLists
      </h1>
      <div className="container mt-2">
        <div
          style={{ top: "50px" }}
          className="position-absolute  start-0 d-lg-none d-md-none"
        >
          <div className="d-flex justify-content-start mx-2 ">
            <Dropdown>
              <Dropdown.Toggle variant="light">
                {user ? (
                  <>
                    <img
                      src={image}
                      alt="User"
                      className="m-0"
                      style={{
                        border: "1px solid #ccc",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  </>
                ) : (
                  <BsPersonCircle className="m-1 person" />
                )}
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-right">
                <Dropdown.Item onClick={handleLogin}>
                  {user ? "Logout" : "Login"}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="searchButton"
          />
        </div>
        <div className="mt-4">
          <div>
            <button
              type="button"
              onClick={homepage}
              className="btn btn-primary home-button w-100"
              style={{ backgroundColor: "#FF204E", borderColor: "#FF204E" }}
            >
              <BsHouseDoorFill className="mr-1" /> Home
            </button>
          </div>
        </div>
        <hr></hr>
        <h6>
          <a
            href="#"
            className="list-group-item list-group-item-action bg-light"
          >
            My Lists
          </a>
        </h6>

        <div>
          {list && (
            <div className="m-2">
              <button
                className="btn btn-secondary d-inline-block d-sm-inline-block"
                onClick={handleWatchlistClick}
              >
                <BsBookmarkPlusFill className="mx-2" />
                <span>{WatchListName}</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        style={{ border: "1px solid black", width: "max-content" }}
        className="position-fixed bottom-0 start-3 mb-4  d-lg-block login"
      >
        <div className="d-flex justify-content-start">
          <Dropdown>
            <Dropdown.Toggle variant="light">
              {user ? (
                <>
                  <img
                    src={image}
                    alt="User"
                    className="profile_img m-1"
                  />
                  <span className="profile_name">{user}</span>
                </>
              ) : (
                <>
                <BsPersonCircle className="m-2" />
                <span style={{ width:"20px"}}>Guest</span>
                </>
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu-right">
              <Dropdown.Item onClick={handleLogin}>
                {user ? "Logout" : "Login"}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
      <SignUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Sidebar;
