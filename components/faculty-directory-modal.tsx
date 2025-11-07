"use client"

import { X } from "lucide-react"
import { useState } from "react"

interface Faculty {
  id: string
  name: string
  position: string
  department: string
  phone: string
}

const facultyData: Faculty[] = [
  {
    id: "1",
    name: "Prof. A",
    position: "Head of Department",
    department: "CSE",
    phone: "**** **** 1234",
  },
  {
    id: "2",
    name: "Prof. B",
    position: "Assistant Professor",
    department: "CSE",
    phone: "**** **** 5678",
  },
  {
    id: "3",
    name: "Prof. C",
    position: "Assistant Professor",
    department: "CSE",
    phone: "**** **** 9012",
  },
  {
    id: "4",
    name: "Prof. D",
    position: "Head of Department",
    department: "ECE",
    phone: "**** **** 3456",
  },
  {
    id: "5",
    name: "Prof. E",
    position: "Assistant Professor",
    department: "ECE",
    phone: "**** **** 7890",
  },
  {
    id: "6",
    name: "Prof. F",
    position: "Assistant Professor",
    department: "ECE",
    phone: "**** **** 2345",
  },
]

interface FacultyDirectoryModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function FacultyDirectoryModal({ isOpen, onClose }: FacultyDirectoryModalProps) {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("CSE")

  if (!isOpen) return null

  const filteredFaculty = facultyData.filter((f) => f.department === selectedDepartment)

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
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
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
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
          <h2 style={{ margin: 0, fontSize: "20px", fontWeight: "600", color: "#e0e7ff" }}>Faculty Directory</h2>
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
              color: "#2d9cdb",
            }}
          >
            <X size={24} />
          </button>
        </div>

        {/* Department Tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(45, 156, 219, 0.2)",
          }}
        >
          {["CSE", "ECE"].map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              style={{
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                backgroundColor: selectedDepartment === dept ? "#2d9cdb" : "rgba(45, 156, 219, 0.1)",
                color: selectedDepartment === dept ? "white" : "#a0aec0",
                cursor: "pointer",
                fontWeight: selectedDepartment === dept ? "600" : "500",
                fontSize: "13px",
                transition: "all 0.2s ease",
              }}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {filteredFaculty.map((faculty) => (
              <div
                key={faculty.id}
                style={{
                  padding: "16px",
                  backgroundColor: "rgba(45, 156, 219, 0.08)",
                  borderRadius: "8px",
                  borderLeft: "4px solid #2d9cdb",
                }}
              >
                <h3 style={{ margin: "0 0 8px 0", fontSize: "14px", fontWeight: "600", color: "#e0e7ff" }}>
                  {faculty.name}
                </h3>
                <p style={{ margin: "4px 0", fontSize: "13px", color: "#cbd5e1" }}>
                  <strong>Position:</strong> {faculty.position}
                </p>
                <p style={{ margin: "4px 0", fontSize: "13px", color: "#cbd5e1" }}>
                  <strong>Phone:</strong> {faculty.phone}
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
              color: "#a0aec0",
              borderLeft: "3px solid #2d9cdb",
            }}
          >
            <strong style={{ color: "#2d9cdb" }}>Note:</strong> Phone numbers are masked for privacy. Contact the
            department office for complete details.
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
