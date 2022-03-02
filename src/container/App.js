import React from "react";
import LanguageSelector from '../components/LanguageSelector';
import UserSignupPage from '../pages/UserSignupPage';
import LoginPage from '../pages/LoginPage';
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";

function App() {
  return (
    <div className="row">
      <UserPage/>
      <LanguageSelector />
    </div>
  );
}

export default App;
