import Home from "./pages/home/Home";
import TopBar from "./components/TopBar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <TopBar/>
      <Home/>
      <Register/>
      <Login/>
      <Single/>
      <Write/>
      <Settings/>
    </Router>
  );
}
export default App;
