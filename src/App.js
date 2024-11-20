
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import MultiStepForm from "./pages/MultiStepForm";
import DisplayData from "./pages/DisplayData";


function HomeLink() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    // Remove data from localStorage when navigating to the home page
    localStorage.removeItem("formData");
    navigate("/"); // Navigate to the Home page
  };

  return (
    <nav className="p-4 bg-blue-500">
      <Link to="/" onClick={handleHomeClick} className="text-white">Home</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        {/* Add the HomeLink component here */}
        <HomeLink />
        <Routes>
          <Route path="/" element={<MultiStepForm />} />
          <Route path="/display" element={<DisplayData />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
