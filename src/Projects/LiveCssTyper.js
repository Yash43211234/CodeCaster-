import React, { useRef, useState } from "react";

export default function LiveCssTyper() {
  const [cssCode, setCssCode] = useState("");
  const [htmlCode, setHtmlCode] = useState("");
  const [viewMode, setViewMode] = useState('css');
  const iframeRef = useRef(null);

  const startTyping = () => {
    const iframe = iframeRef.current;
    const doc = iframe.contentDocument || iframe.contentWindow.document;

    doc.open();
    doc.write(`
      <html>
        <head>
          <style id="live-style"></style>
          <style>
            body { 
              font-family: sans-serif;
              color: #e0e0e0;
              padding: 20px;
              background-color: #2c2c2c;
            }
          </style>
        </head>
        <body>${htmlCode}</body>
      </html>
    `);
    doc.close();

    let i = 0;
    const interval = setInterval(() => {
      const typedCSS = cssCode.slice(0, i);
      const styleTag = doc.getElementById("live-style");
      if (styleTag) styleTag.innerHTML = typedCSS;
      i++;
      if (i > cssCode.length) clearInterval(interval);
    }, 20);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#1e1e1e",
      padding: "20px",
    }}>
      <div style={{
        width: "600px",
        height: "800px",
        padding: "15px",
        fontFamily: "Arial, sans-serif",
        color: "#e0e0e0",
        background: "#282828",
        borderRadius: "10px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        overflow: "hidden"
      }}>
        <h1 style={{
          textAlign: "center",
          fontSize: "20px",
          color: "#00b2ff",
          textShadow: "0 0 5px rgba(0, 178, 255, 0.3)",
          margin: "0 0 10px 0"
        }}>
          💻 Live CSS Typer
        </h1>
        
        {/* Live Preview Box (Now at the top) */}
        <h2 style={{ fontSize: "16px", marginBottom: "5px" }}>🔍 Live Preview</h2>
        <iframe
          ref={iframeRef}
          title="Live Output"
          style={{
            height: "400px", // Reduced height to make space for code boxes
            width: "100%",
            border: "1px solid #00b2ff",
            borderRadius: "5px",
            backgroundColor: "#2c2c2c",
          }}
        />

        <div style={{ display: "flex", width: "100%", gap: "5px", marginTop: "auto" }}>
          <button
            onClick={() => setViewMode('html')}
            style={{
              flex: 1,
              padding: "8px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: viewMode === 'html' ? "#00b2ff" : "#444",
              color: viewMode === 'html' ? "#fff" : "#aaa",
              fontWeight: "bold",
              transition: "background-color 0.3s"
            }}
          >
            ⚛️ index.html
          </button>
          <button
            onClick={() => setViewMode('css')}
            style={{
              flex: 1,
              padding: "8px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: viewMode === 'css' ? "#00b2ff" : "#444",
              color: viewMode === 'css' ? "#fff" : "#aaa",
              fontWeight: "bold",
              transition: "background-color 0.3s"
            }}
          >
            🎨 styles.css
          </button>
          
        </div>

        {/* Conditionally Rendered Textarea (Now at the bottom) */}
        {viewMode === 'css' && (
          <textarea
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            style={{
              height: "150px", // Reduced height
              width: "100%",
              padding: "8px",
              fontFamily: "monospace",
              borderRadius: "5px",
              border: "1px solid #444",
              background: "#2d2d2d",
              color: "#f8f8f2",
              resize: "none"
            }}
            placeholder="Paste or type CSS code here..."
          />
        )}
        
        {viewMode === 'html' && (
          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            style={{
              height: "150px", // Reduced height
              width: "100%",
              padding: "8px",
              fontFamily: "monospace",
              borderRadius: "5px",
              border: "1px solid #444",
              background: "#2d2d2d",
              color: "#f8f8f2",
              resize: "none"
            }}
            placeholder="Paste or type HTML structure here..."
          />
        )}

        <button
          onClick={startTyping}
          style={{
            padding: "8px 20px",
            fontSize: "14px",
            backgroundColor: "#00b2ff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            fontWeight: "bold",
          }}
        >
          ▶️ Start Autotyping
        </button>
      </div>
    </div>
  );
}