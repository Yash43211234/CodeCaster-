import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css"; // Make sure this file exists

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = () => {
    setMessage("");
    setError("");

    if (!email.trim() || !password.trim() || !cpassword.trim()) {
      setError("❌ All fields are required.");
      return;
    }

    if (password !== cpassword) {
      setError("❌ Passwords do not match.");
      return;
    }

    if (email === "admin12@gmail.com" && password === "12345") {
      alert("Login Successfully.")
      navigate("/success");
    } else {
      setError("❌ Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account / Login</h2>

      <div className="form-group">
        <label>Email Address</label>
        <input
          type="email"
          placeholder="e.g. user@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
        />
      </div>

      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Re-enter password"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
          autoComplete="new-password"
        />
      </div>

      <button className="login-btn" onClick={handleLogin}>
        🔐 Login
      </button>

      {error && <div className="message error">{error}</div>}
      {message && <div className="message success">{message}</div>}
    </div>
  );
}
