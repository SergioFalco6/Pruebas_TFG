import { Routes, Route } from "react-router-dom";

// importamos los componentes
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewPatient from "./components/NewPatient";
import PatientDetails from "./components/PatientDetails";
import SurveyComponent from "./components/SurveyComponent";


function App() {

  return (
    <Routes>
      <Route exact path="/" element = {<Login/>} />
      <Route path="/register" element = {<Register/>} />
      <Route path="/dashboard" element = {<><Navbar/> <Dashboard/></>} />
      <Route path="/details/:id" element = {<><Navbar/> <PatientDetails/></>} />
      <Route path="/home" element = {<><Navbar/> <Home/></>} />
      <Route path="/newpatient" element = {<><Navbar/> <NewPatient/></>} />
      <Route path="/survey" element = {<><Navbar/> <SurveyComponent/></>} />
    </Routes>
);
}

export default App
