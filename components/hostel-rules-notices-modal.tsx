"use client"

import { AlertCircle } from "lucide-react"

interface HostelRulesNoticesModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HostelRulesNoticesModal({ isOpen, onClose }: HostelRulesNoticesModalProps) {
  const rules = [
    {
      number: 1,
      description: "Hostel admission is at the discretion of the Director/Warden and can be revoked anytime.",
    },
    {
      number: 2,
      description: "Students must report to the Warden on arrival, pay dues, and vacate rooms when required.",
    },
    {
      number: 3,
      description: "Check and sign for room items on allotment; pay for any loss or damage.",
    },
    {
      number: 4,
      description: "Warden handles daily hostel matters; major issues go to higher authorities.",
    },
    {
      number: 5,
      description: "Rooms can be inspected anytime by hostel or institute staff.",
    },
    {
      number: 6,
      description: "Authorities may break open rooms for rule violations or safety concerns.",
    },
    {
      number: 7,
      description: "Maintain silence; avoid loud music or noise disturbing others.",
    },
    {
      number: 8,
      description: "Don't remove or misuse hostel furniture or fittings.",
    },
    {
      number: 9,
      description: "Only computers are allowed; other electrical devices need approval.",
    },
    {
      number: 10,
      description: "Coolers allowed (Apr–Jun) with permission and extra charges.",
    },
    {
      number: 11,
      description: "Share electricity charges fairly; save power and water.",
    },
    {
      number: 12,
      description: "No private servants, pets, alcohol, or drugs allowed.",
    },
    {
      number: 13,
      description: "Keep belongings secure; institute not responsible for theft.",
    },
    {
      number: 14,
      description: "Outsiders and guests need prior Warden permission; no unauthorized stay.",
    },
    {
      number: 15,
      description: "No obscene acts, posters, or content; no fireworks or weapons on campus.",
    },
  ]

  if (!isOpen) return null

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#1a2a3a",
          borderRadius: "12px",
          padding: "32px",
          maxWidth: "700px",
          width: "90%",
          maxHeight: "85vh",
          overflowY: "auto",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(45, 156, 219, 0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#2d9cdb", margin: 0 }}>HOSTEL RULES</h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#2d9cdb",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#6c5ce7"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#2d9cdb"
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
          {rules.map((rule, index) => (
            <div
              key={index}
              style={{
                padding: "16px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "10px",
                border: "1px solid rgba(45, 156, 219, 0.2)",
                display: "flex",
                gap: "12px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(45, 156, 219, 0.1)"
                e.currentTarget.style.borderColor = "rgba(45, 156, 219, 0.4)"
                e.currentTarget.style.transform = "translateX(4px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)"
                e.currentTarget.style.borderColor = "rgba(45, 156, 219, 0.2)"
                e.currentTarget.style.transform = "translateX(0)"
              }}
            >
              <div
                style={{
                  minWidth: "32px",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #2d9cdb 0%, #6c5ce7 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "700",
                  fontSize: "14px",
                  flexShrink: 0,
                }}
              >
                {rule.number}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: "1.6",
                  fontWeight: "500",
                }}
              >
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div
          style={{
            marginTop: "24px",
            padding: "16px",
            backgroundColor: "rgba(45, 156, 219, 0.1)",
            borderRadius: "10px",
            border: "1px solid rgba(45, 156, 219, 0.3)",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            gap: "8px",
            alignItems: "flex-start",
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0, marginTop: "2px", color: "#2d9cdb" }} />
          <div>
            <strong style={{ color: "#2d9cdb" }}>Important:</strong> Please read and comply with all hostel rules.
            Violations may result in penalties or disciplinary action. For clarifications, contact your Resident
            Assistant (RA) or the hostel warden's office.
          </div>
        </div>
      </div>
    </div>
  )
}
