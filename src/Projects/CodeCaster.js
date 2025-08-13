import React, { useState, useRef, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers";

export default function CodeCaster() {
  const [inputCode, setInputCode] = useState(`function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('World');`);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(50);

  const intervalRef = useRef(null);
  const indexRef = useRef(0);
  const codeBoxRef = useRef(null);

  // Highlight code after each character
  useEffect(() => {
    Prism.highlightAll();
  }, [displayedCode]);

  const startTyping = () => {
    if (isPlaying || !inputCode.trim()) return;
    setIsPlaying(true);
    setDisplayedCode("");
    indexRef.current = 0;

    intervalRef.current = setInterval(() => {
      if (indexRef.current >= inputCode.length) {
        clearInterval(intervalRef.current);
        setIsPlaying(false);
        return;
      }
      setDisplayedCode(inputCode.substring(0, indexRef.current + 1));
      if (codeBoxRef.current) {
        codeBoxRef.current.scrollTop = codeBoxRef.current.scrollHeight;
      }
      indexRef.current++;
    }, speed);
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
    <div style={{ display: "flex", justifyContent: "center", background: "#0d1117", minHeight: "100vh", padding: "20px" }}>
      <div style={{ width: "650px", background: "#161b22", borderRadius: "10px", padding: "15px", color: "#e6edf3" }}>
        <h1 style={{ textAlign: "center", color: "#00b2ff" }}>🚀 CodeCaster</h1>

        {/* Output */}
        <div
          style={{
            background: "#0d1117",
            padding: "10px",
            borderRadius: "8px",
            height: "400px",
            overflowY: "auto",
          }}
          ref={codeBoxRef}
        >
          <pre className="line-numbers">
            <code className="language-javascript">{displayedCode}</code>
          </pre>
        </div>

        {/* Speed Control */}
        <div style={{ marginTop: "15px" }}>
          <label>⚡ Speed: {speed} ms</label>
          <input
            type="range"
            min="2"
            max="200"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>

        {/* Input */}
        <h3 style={{ marginTop: "15px" }}>Source Code</h3>
        <textarea
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
          style={{
            width: "100%",
            height: "150px",
            background: "transparent",
            color: "#e6edf3",
            fontFamily: "'Fira Code', monospace",
            fontSize: "14px",
            border: "none",
            outline: "none",
            resize: "none",
          }}
          placeholder="Paste your code here..."
        />

        {/* Controls */}
        <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
          <button
            onClick={startTyping}
            disabled={isPlaying}
            style={{ background: "#00b2ff", color: "#fff", border: "none", padding: "8px", borderRadius: "6px", cursor: "pointer" }}
          >
            ▶️ Start
          </button>
          <button
            onClick={stopTyping}
            style={{ background: "#444", color: "#fff", border: "none", padding: "8px", borderRadius: "6px", cursor: "pointer" }}
          >
            ⏹️ Stop
          </button>
          <button
            onClick={resetTyping}
            style={{ background: "#666", color: "#fff", border: "none", padding: "8px", borderRadius: "6px", cursor: "pointer" }}
          >
            🔁 Reset
          </button>
        </div>
      </div>
    </div>
  );
}
