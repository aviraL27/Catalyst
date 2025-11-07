import { createClient } from "@/lib/supabase/server"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const userId = url.searchParams.get("userId")

    const supabase = await createClient()

    let query = supabase.from("feedback").select("*")

    if (userId) {
      query = query.eq("user_id", userId)
    }

    const { data, error } = await query.order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      return Response.json({ error: "Failed to fetch feedback" }, { status: 500 })
    }

    return Response.json({ feedback: data })
  } catch (error) {
    console.error("Error fetching feedback:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const userId = body.userId

    if (!userId) {
      return Response.json({ error: "User ID required" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("feedback")
      .insert({
        user_id: userId,
        name: body.name || null,
        email: body.email || null,
        bt_id: body.btId || null,
        message: body.message,
        rating: body.rating || null,
      })
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return Response.json({ error: "Failed to submit feedback" }, { status: 500 })
    }

    return Response.json({ success: true, feedback: data })
  } catch (error) {
    console.error("Error submitting feedback:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
