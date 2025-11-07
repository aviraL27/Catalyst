import { generateOTP, storeOTP } from "@/lib/otp-store"

export async function POST(request: Request) {
  try {
    const { email, btId } = await request.json()

    if (!email || !btId) {
      return Response.json({ message: "Email and BT ID are required" }, { status: 400 })
    }

    const trimmedEmail = email.trim().toLowerCase()
    const trimmedBtId = btId.trim().toUpperCase()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(trimmedEmail)) {
      return Response.json({ message: "Invalid email format" }, { status: 400 })
    }

    const otp = generateOTP()
    storeOTP(trimmedEmail, trimmedBtId, otp)
    console.log(`[OTP] Generated OTP ${otp} for ${trimmedEmail} with btId ${trimmedBtId}`)

    return Response.json(
      {
        message: "OTP generated",
        email: trimmedEmail,
        otp,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error:", error)
    return Response.json({ message: error instanceof Error ? error.message : "An error occurred" }, { status: 500 })
  }
}
