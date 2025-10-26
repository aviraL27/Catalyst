"use client"

interface LatestEventsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LatestEventsModal({ isOpen, onClose }: LatestEventsModalProps) {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.7)",
          zIndex: 999,
          animation: "fadeIn 0.3s ease",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "linear-gradient(135deg, #1a1f3a 0%, #0f1729 100%)",
          border: "1px solid rgba(59, 130, 246, 0.5)",
          borderRadius: "12px",
          maxWidth: "600px",
          width: "90%",
          maxHeight: "80vh",
          overflowY: "auto",
          zIndex: 1000,
          padding: "24px",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.2)",
          animation: "slideUp 0.3s ease",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(255, 255, 255, 0.1)",
            border: "none",
            color: "white",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
          }}
        >
          ✕
        </button>

        {/* Content */}
        <h2 style={{ marginTop: 0, marginBottom: "16px", color: "#e0e7ff" }}>🚀 Latest College Events</h2>

        <div style={{ color: "#e0e7ff", lineHeight: "1.6", fontSize: "14px" }}>
          <h3 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "8px" }}>
            💻 1️⃣ Inter-IIIT Hackathon – "UDBHAV 2025"
          </h3>
          <p>
            Get ready to code. Compete. Conquer! Our college is hosting the Inter-IIIT Hackathon – UDBHAV 2025, where
            innovation meets impact! It's time to bring your ideas to life, collaborate with brilliant minds, and build
            solutions that matter. This is not just another hackathon — it's a battlefield of creativity, logic, and
            caffeine-fueled brilliance!
          </p>

          <h4 style={{ color: "#93c5fd", marginTop: "12px", marginBottom: "8px" }}>Event Highlights:</h4>
          <ul style={{ marginLeft: "20px", marginTop: "8px", marginBottom: "12px", color: "#d1d5db" }}>
            <li>⚡ 36 hours of intense coding and problem-solving</li>
            <li>🧠 Real-world problem statements from industry experts</li>
            <li>🏆 Exciting prizes, certificates, and networking opportunities with top tech mentors</li>
          </ul>

          <p style={{ marginTop: "12px", marginBottom: "12px", color: "#d1d5db" }}>
            📅 <strong>Date:</strong> [To Be Announced Soon]
            <br />📍 <strong>Venue:</strong> College Innovation Lab / Virtual Mode
            <br />🔗 <strong>Register Now:</strong> Click here to register via Google Form
            <br />
            ⚠️ <strong>Deadline:</strong> Limited seats – register ASAP before slots vanish!
          </p>

          <h3 style={{ color: "#60a5fa", marginTop: "20px", marginBottom: "8px" }}>
            🧩 2️⃣ ICPC College Online Qualifiers – CodeChef Platform
          </h3>
          <p>
            The ultimate coding showdown is here! Think you've got what it takes to represent your college on the global
            ICPC stage? This is your chance to shine in the ICPC College Qualifiers, happening online on CodeChef.
            Compete against the best brains and prove your algorithmic supremacy!
          </p>

          <h4 style={{ color: "#93c5fd", marginTop: "12px", marginBottom: "8px" }}>Event Details:</h4>
          <ul style={{ marginLeft: "20px", marginTop: "8px", marginBottom: "12px", color: "#d1d5db" }}>
            <li>
              📅 <strong>Date:</strong> November 8, 2025
            </li>
            <li>
              🕕 <strong>Time:</strong> As per CodeChef schedule
            </li>
            <li>
              🌐 <strong>Platform:</strong> ICPC Qualifiers on CodeChef
            </li>
            <li>
              🏅 <strong>Eligibility:</strong> All undergraduate students
            </li>
          </ul>

          <p style={{ marginTop: "12px", marginBottom: "12px", color: "#d1d5db" }}>
            🔗 <strong>Register Here:</strong> Google Form Registration Link
          </p>

          <h4 style={{ color: "#93c5fd", marginTop: "12px", marginBottom: "8px" }}>🎯 Why Participate?</h4>
          <p style={{ color: "#d1d5db" }}>
            Because ICPC = Prestige, Recognition, and Unmatched Experience in the world of competitive programming!
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translate(-50%, -40%);
            opacity: 0;
          }
          to {
            transform: translate(-50%, -50%);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
