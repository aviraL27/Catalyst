"use client"

import { X } from "lucide-react"

interface EmergencyContactsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EmergencyContactsModal({ isOpen, onClose }: EmergencyContactsModalProps) {
  if (!isOpen) return null

  const contacts = [
    {
      title: "Hostel Warden - Boys",
      name: "Warden (Boys Hostel)",
      phone: "**** **** 1234",
    },
    {
      title: "Hostel Warden - Girls",
      name: "Warden (Girls Hostel)",
      phone: "**** **** 5678",
    },
    {
      title: "Hostel Guard - Main Gate",
      name: "Guard (Main Gate)",
      phone: "**** **** 9012",
    },
    {
      title: "Hostel Guard - Backup",
      name: "Guard (Backup)",
      phone: "**** **** 3456",
    },
    {
      title: "Student Representative",
      name: "Student Representative",
      phone: "**** **** 7890",
    },
  ]

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
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
          width: "90%",
          maxWidth: "500px",
          maxHeight: "80vh",
          overflow: "auto",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
          animation: "slideUp 0.3s ease-out",
          border: "1px solid rgba(45, 156, 219, 0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
            borderBottom: "1px solid rgba(45, 156, 219, 0.2)",
            backgroundColor: "rgba(45, 156, 219, 0.1)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#2d9cdb" }}>Emergency Contacts</h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#cbd5e1",
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          <p style={{ color: "#cbd5e1", marginBottom: "20px", fontSize: "14px" }}>
            Important contact numbers for hostel-related emergencies and support:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {contacts.map((contact, index) => (
              <div
                key={index}
                style={{
                  padding: "16px",
                  backgroundColor: "rgba(45, 156, 219, 0.1)",
                  borderRadius: "8px",
                  borderLeft: "4px solid #2d9cdb",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(45, 156, 219, 0.15)"
                  e.currentTarget.style.transform = "translateX(4px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(45, 156, 219, 0.1)"
                  e.currentTarget.style.transform = "translateX(0)"
                }}
              >
                <h3 style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600", color: "#2d9cdb" }}>
                  {contact.title}
                </h3>
                <p style={{ margin: "4px 0", fontSize: "13px", color: "#cbd5e1" }}>
                  <strong>Name:</strong> {contact.name}
                </p>
                <p style={{ margin: "4px 0", fontSize: "13px", color: "#cbd5e1" }}>
                  <strong>Phone:</strong> {contact.phone}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div
            style={{
              marginTop: "20px",
              padding: "12px",
              backgroundColor: "rgba(45, 156, 219, 0.15)",
              borderRadius: "8px",
              fontSize: "12px",
              color: "#cbd5e1",
              borderLeft: "3px solid #2d9cdb",
            }}
          >
            <strong style={{ color: "#2d9cdb" }}>Note:</strong> Phone numbers are masked for privacy. Contact the hostel
            office for complete details.
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
