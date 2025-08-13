import { motion } from "framer-motion";

export default function ChannelOutro() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: "monospace",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Logo */}
      <motion.img
        src="/codecaster.png" // Replace with your logo path or URL
        alt="Logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          width: "80px",
          height: "80px",
          marginBottom: "1rem",
          borderRadius: "50%",
          boxShadow: "0 0 20px rgba(255,255,255,0.3)",
        }}
      />

      {/* Channel Name */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          fontSize: "1.5rem",
          color: "#38bdf8",
          fontWeight: "bold",
        }}
      >
      
      </motion.h1>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        style={{
          fontSize: "1.1rem",
          marginTop: "0.5rem",
          color: "#d1d5db",
        }}
      >
        ⚙️ Fun & futuristic coding shorts
      </motion.p>

      {/* Subscribe CTA */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{
          fontSize: "1rem",
          color: "#f472b6",
          marginTop: "0.5rem",
        }}
      >
        ✨ Subscribe for dev magic!
      </motion.p>
    </div>
  );
}
