import { useState } from "react";
import profilePic from "../assets/profile.png";
import { FaGoogle } from "react-icons/fa";
import "../styles/userinfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState("Ife");
  const navigate = useNavigate();

  const handleUploadClick = () => {
    navigate("/new"); // This will route to the Upload page
  };

  return (
    <div className="userinfocon">
      {isSignedIn ? (
        <div className="signedinmessage">
          <button className="signinbtn">
            <p className="signInText" onClick={handleUploadClick}>
              Upload Art
            </p>
          </button>
          <h3 className="welcometext">Welcome, {name}</h3>
          <img className="profilepic" src={profilePic} alt={name} />
        </div>
      ) : (
        <div>
          <button className="signinbtn" onClick={() => setIsSignedIn(true)}>
            <FaGoogle className="googleIcon" />
            <p className="signInText">Sign in with Google</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
