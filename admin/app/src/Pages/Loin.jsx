import React, { useState } from "react";
import axios from "axios";

function Loin() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("it work");

    if (!email || !Password) {
      return setError("** Email and Password is Requred");
    }
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/login`,
        {
          email,
          Password,
        }
      );
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred.";
      setError(errorMessage);
    }
  };

  return (
    <div>
      <div className="form">
        <form className="my-3 container" onSubmit={submitHandler}>
          <div className="text-danger fw-bold d-flex justify-content-center">
            <p>Login form</p>
          </div>
          <div class="mb-2">
            <label
              className="text-secondary mb-2"
              for="exampleFormControlInput1"
              class="form-label"
            >
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label
              className="text-secondary mb-2"
              for="exampleFormControlInput1"
              class="form-label"
            >
              Password
            </label>
            <input
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="Password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="******"
              required
            />
          </div>
          <p>{error}</p>

          <button type="Submit" class="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loin;
