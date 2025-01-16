import React, { useState } from "react";
import axios from "axios";
import { loginApi } from "../store/api/auth";
import { useDispatch } from "react-redux";

function Loin() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("it work");

    if (!email || !password) {
      return setError("** Email and Password is Requred");
    }
    const credentials = { email, password };
    dispatch(loginApi(credentials));
  };

  console.log(email, password);

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
              value={password}
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
