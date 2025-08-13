import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessPage() {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        background: "#f4fdf6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#d4edda",
          color: "#155724",
          padding: "40px 30px",
          border: "2px solid #c3e6cb",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "90%",
          animation: "fadeIn 1.2s ease",
        }}
      >
        {showConfetti && (
          <>
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "24px",
                animation: "fall 2.5s linear infinite",
              }}
            >
              ✨ 🎊 🎉 💫 🎇
            </div>
          </>
        )}

        <div
          style={{
            fontSize: "50px",
            marginBottom: "10px",
            animation: "pop 0.6s ease-in-out",
          }}
        >
          🎉
        </div>
        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
          Login Successful!
        </h1>
        <p style={{ marginBottom: "25px", fontSize: "16px" }}>
          Welcome back, hero of code 👨‍💻
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "background 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#218838")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#28a745")
          }
        >
          🔙 Go to Home
        </button>

        {/* Inline keyframes via global style */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pop {
            0% { transform: scale(0.2); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          @keyframes fall {
            0% { top: -30px; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 130%; }
          }
        `}</style>
      </div>
    </div>
  );
}
