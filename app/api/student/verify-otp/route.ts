import { verifyOTP, cleanupExpiredOTPs } from "@/lib/otp-store"

export async function POST(request: Request) {
  try {
    cleanupExpiredOTPs()

    const { email, otp } = await request.json()

    if (!email || !otp) {
      return Response.json({ message: "Email and OTP are required" }, { status: 400 })
    }

    const trimmedEmail = email.trim().toLowerCase()
    const trimmedOtp = otp.trim()

    console.log(`[Verify OTP] Attempting to verify OTP for ${trimmedEmail}`)
    const isValid = verifyOTP(trimmedEmail, "", trimmedOtp)

    if (isValid) {
      const token = Buffer.from(`${trimmedEmail}:${Date.now()}`).toString("base64")
      console.log(`[Verify OTP] OTP verified successfully for ${trimmedEmail}`)
      return Response.json({ message: "Login successful", token, email: trimmedEmail }, { status: 200 })
    }

    console.log(`[Verify OTP] OTP verification failed for ${trimmedEmail}`)
    return Response.json({ message: "Invalid or expired OTP" }, { status: 401 })
  } catch (error) {
    console.error("Error:", error)
    return Response.json({ message: "An error occurred" }, { status: 500 })
  }
}
