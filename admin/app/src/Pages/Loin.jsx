import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../store/api/auth";
import { loginSuccess } from "../store/action/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

function Loin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const auth = useSelector((state) => state.auth);
  console.log(auth);

  const mutation = useMutation({
    mutationFn: (data) => loginApi(data),
    onSuccess: (data) => {
      dispatch(loginSuccess(data.token));
      console.log(data);
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.massege);
      console.log(error.massege);
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    try {
      mutation.mutate({ email, password });
    } catch (error) {
      console.error("Caught error in handleSubmit:", error.message);
      setError(error.message);
      setTimeout(() => setError(" "), 8000);
    }
  };

  return (
    <div>
      <div className="form">
        <form className="my-3 container" onSubmit={submitHandler}>
          <div className="text-danger fw-bold d-flex justify-content-center">
            <p>Login form</p>
          </div>
          <div className="mb-2">
            <label className="text-secondary mb-2">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="text-secondary mb-2 form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="Password"
              className="form-control"
              placeholder="******"
              required
            />
          </div>
          <p>{error}</p>

          <button type="Submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Loin;
