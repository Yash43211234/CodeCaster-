import React from "react";
import LiveCssTyper from "./LiveCssTyper";
import CodeCaster from "./CodeCaster";

export default function Playground() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        background: "#0d1117",
        padding: "20px",
        minHeight: "100vh",
        boxSizing: "border-box",
        justifyContent: "center",
      }}
    >
      {/* Panel 1 */}
      <div style={panelStyle}>
        <h2 style={headingStyle}>🎨 Live CSS Typer</h2>
        <LiveCssTyper />
      </div>

      {/* Panel 2 */}
      <div style={panelStyle}>
        <h2 style={headingStyle}>🚀 Code Caster</h2>
        <CodeCaster />
      </div>
    </div>
  );
}

// 🔹 Shared styles
const panelStyle = {
  background: "#161b22",
  borderRadius: "12px",
  padding: "15px",
  color: "#e6edf3",
  width: "100%",
  maxWidth: "650px",
  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
  boxSizing: "border-box",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "15px",
  color: "#00b2ff",
  fontWeight: "bold",
};
