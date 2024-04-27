import { Dropdown, Modal, Button } from "react-bootstrap";
import { useMyContext } from "../context/Provider";
import { useState } from "react";

const SignUp = ({showModal, setShowModal}) => {

  const [email, setEmail] = useState("");
  
  const {  signIn } = useMyContext();

  const handleCloseModal = () => {
    setShowModal();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    signIn(email);
    handleCloseModal();
  };

  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal}   >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#FF204E" }}>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label
                style={{ color: "#FF204E" }}
                className="form-label"
                htmlFor="email"
              >
                Email address
              </label>
              <input
                type="email"
                className="form-control mb-2"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <Button
              className="mt-3"
              style={{ backgroundColor: "#FF204E", borderColor: "#FF204E" }}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignUp;
