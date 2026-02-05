import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { useAuth } from "../../context/AuthContext";
import "./authModal.css";

const AuthModal = ({ type, onClose }) => {
    
    const {login, signup, setAuthType} = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) { setError("All fields are required"); return; } 
        if (!email.includes("@")) { setError("Please enter a valid email"); return; }
        if (password.length < 6) {
            setError('Password must be at least 6 characters'); return;
        }
      
        const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (!specialChars.test(password)) {
          setError(
            "Password must contain at least one special character (!@#$%^&*)",
          );
          return;
        }
      
        if (!/[A-Z]/.test(password)) {
          setError("Password must contain at least one uppercase letter");
          return;
        }
      
        if (!/\d/.test(password)) {
          setError("Password must contain at least one number");
          return;
        }
      
        setError("");

        console.log({ email, password, type })
        
        if (type === "signup") signup(email); else login(email);
        onClose();
}

  return (
    <div className="auth__overlay">
      <div className="auth__modal">
        <button className="auth__close" onClick={onClose}>
          <RiCloseLine color="#fff" size={27} />
        </button>

        <h2>{type === "signup" ? "Create an account" : "Welcome back"}</h2>

        <form onSubmit={handleSubmit}>
          {error && <p className="auth__error">{error}</p>}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="auth__password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="auth__password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
            </button>
          </div>

          <button type="submit">
            {type === "signup" ? "Sign up" : "Sign in"}
          </button>
        </form>

        <p className="auth__switch">
          {type === "signup" ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setAuthType("signin")}>Sign in</span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span onClick={() => setAuthType("signup")}>Sign up</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
