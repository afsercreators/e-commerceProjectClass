import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Loin";
import Dashboard from "./Pages/Dashbaord";
import useConditional from "./conditionalComponents/conditionalRoute";
import useConditionalForLogin from "./conditionalComponents/conditionalRouteForLogin";

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
  return (
    <div>
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
    </div>
  );
}

export default App;
