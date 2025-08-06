import React, { useState, useRef } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

// This component uses a clean, modern design with CSS-in-JS.
// The styles are defined as a single object to keep them organized.

export default function CodeCaster() {
  const [inputCode, setInputCode] = useState("console.log('Hello, world!');");
  const [displayedCode, setDisplayedCode] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(50);

  const intervalRef = useRef(null);
  const indexRef = useRef(0);
  const codeBoxRef = useRef(null);

  const startTyping = () => {
    if (isPlaying || !inputCode.trim()) return;
    setIsPlaying(true);
    setDisplayedCode("");
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      setDisplayedCode((prev) => {
        const updated = prev + inputCode[indexRef.current];
        scrollToBottom();
        return updated;
      });
      indexRef.current++;
      if (indexRef.current >= inputCode.length) {
        clearInterval(intervalRef.current);
        setIsPlaying(false);
      }
    }, speed);
  };

  const scrollToBottom = () => {
    if (codeBoxRef.current) {
      codeBoxRef.current.scrollTop = codeBoxRef.current.scrollHeight;
    }
  };

  const stopTyping = () => {
    clearInterval(intervalRef.current);
    setIsPlaying(false);
  };

  const resetTyping = () => {
    clearInterval(intervalRef.current);
    setDisplayedCode("");
    indexRef.current = 0;
    setIsPlaying(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <span role="img" aria-label="rocket">
          🚀
        </span>{" "}
        CodeCaster - Auto Typing Simulator
      </h1>
      <p style={styles.subtitle}>
        Paste your code and watch it type itself, character by character.
      </p>

      <div style={styles.flexArea}>
        {/* Left Side - Input */}
        <div style={styles.card}>
          <h3 style={styles.cardHeader}>Source Code</h3>
          <textarea
            rows="12"
            style={styles.textarea}
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            placeholder="Paste your code here..."
          ></textarea>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Typing Speed (ms/char):</label>
            <input
              type="number"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              style={styles.input}
            />
          </div>

          <div style={styles.buttonGroup}>
            <button
              onClick={startTyping}
              disabled={isPlaying}
              style={styles.button}
            >
              ▶️ Start
            </button>
            <button onClick={stopTyping} style={styles.button}>
              ⏹️ Stop
            </button>
            <button onClick={resetTyping} style={styles.button}>
              🔁 Reset
            </button>
          </div>
        </div>

        {/* Right Side - Output */}
        <div style={styles.card}>
          <h3 style={styles.cardHeader}>Typing Output</h3>
          <div style={styles.codeContainer} ref={codeBoxRef}>
            <pre style={styles.codeBlock}>
              <code
                className="language-javascript"
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    displayedCode,
                    Prism.languages.javascript,
                    "javascript"
                  ),
                }}
              ></code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Inter', sans-serif",
    background: "#0d1117", // GitHub dark theme background
    color: "#e6edf3",
    minHeight: "100vh",
    padding: "40px 20px",
    boxSizing: "border-box",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "10px",
    letterSpacing: "-1px",
    background: "linear-gradient(45deg, #1A73E8, #34A853, #FBBC05)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1rem",
    color: "#8b949e",
    marginBottom: "40px",
  },
  flexArea: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "600px",
    backgroundColor: "#161b22",
    borderRadius: "12px",
    padding: "30px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
    border: "1px solid #30363d",
    transition: "transform 0.2s ease-in-out",
    ":hover": {
      transform: "translateY(-5px)",
    },
  },
  cardHeader: {
    fontSize: "1.5rem",
    marginBottom: "20px",
    borderBottom: "1px solid #30363d",
    paddingBottom: "10px",
  },
  textarea: {
    width: "100%",
    fontFamily: "'Fira Code', monospace", // A nice coding font
    fontSize: "14px",
    padding: "15px",
    borderRadius: "8px",
    resize: "vertical",
    minHeight: "200px",
    backgroundColor: "#0d1117",
    color: "#e6edf3",
    border: "1px solid #30363d",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.4)",
  },
  inputGroup: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  label: {
    fontSize: "14px",
    color: "#c9d1d9",
    whiteSpace: "nowrap",
  },
  input: {
    padding: "8px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #30363d",
    backgroundColor: "#0d1117",
    color: "#e6edf3",
    outline: "none",
    width: "80px",
    textAlign: "center",
    ":focus": {
      borderColor: "#58a6ff",
    },
  },
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    padding: "10px 18px",
    fontSize: "14px",
    fontWeight: "bold",
    backgroundColor: "#21262d",
    color: "#c9d1d9",
    border: "1px solid #30363d",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out, transform 0.1s ease-in-out",
    ":hover": {
      backgroundColor: "#30363d",
    },
    ":active": {
      transform: "scale(0.98)",
    },
  },
  codeContainer: {
    maxHeight: "300px",
    overflowY: "auto",
    backgroundColor: "#0d1117",
    borderRadius: "8px",
    padding: "20px",
    border: "1px solid #30363d",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.4)",
    // Custom scrollbar for webkit browsers
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#161b22",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#30363d",
      borderRadius: "10px",
      border: "2px solid #161b22",
    },
  },
  codeBlock: {
    margin: 0,
    fontSize: "14px",
    fontFamily: "'Fira Code', monospace",
    overflowWrap: "break-word",
  },
};