import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Loin";
import Dashboard from "./Pages/Dashbaord";
import useConditional from "./conditionalComponents/conditionalRoute";
import useConditionalForLogin from "./conditionalComponents/conditionalRouteForLogin";
import { ToastContainer } from "react-toastify";
import Nav from "./Components/Nav";
import { useSelector } from "react-redux";
import { useState } from "react";
// Wrapper component for Login route
function ConditionalRouteForLogin({ children }) {
  const content = useConditionalForLogin(children); // Using hook inside a functional component
  return <>{content}</>;
}

// Wrapper component for Dashboard route
function ConditionalRoute({ children }) {
  const content = useConditional(children); // Using hook inside a functional component
  return <>{content}</>;
}

function App() {
  const [authorized, setauthorized] = useState(false);
  const auth = useSelector((state) => state.auth);

  if (auth.token) {
    setauthorized(true);
  }

  return (
    <div>
      {authorized ? <Nav /> : null}

      <Routes>
        <Route
          path="/login"
          element={
            <ConditionalRouteForLogin>
              <Login />
            </ConditionalRouteForLogin>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ConditionalRoute>
              <Dashboard />
            </ConditionalRoute>
          }
        />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
