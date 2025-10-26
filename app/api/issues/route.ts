import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const userId = body.userId

    // Validate required fields
    if (!body.btId || !body.name || !body.email || !body.category || !body.urgency || !body.description || !userId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase
      .from("issues")
      .insert({
        user_id: userId,
        bt_id: body.btId,
        name: body.name,
        email: body.email,
        category: body.category,
        urgency: body.urgency,
        description: body.description,
        status: "open",
      })
      .select()
      .single()

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to create issue" }, { status: 500 })
    }

    console.log("Issue submitted:", data)

    return NextResponse.json({ success: true, issue: data }, { status: 201 })
  } catch (error) {
    console.error("Error processing issue:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get("userId")

    const supabase = await createClient()

    let query = supabase.from("issues").select("*")

    if (userId) {
      query = query.eq("user_id", userId)
    }

    const { data, error } = await query.order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase error:", error)
      return NextResponse.json({ error: "Failed to fetch issues" }, { status: 500 })
    }

    const formattedIssues = data.map((issue: any) => ({
      id: issue.id,
      btId: issue.bt_id,
      name: issue.name,
      email: issue.email,
      category: issue.category,
      urgency: issue.urgency,
      description: issue.description,
      createdAt: issue.created_at,
      status: issue.status,
    }))

    return NextResponse.json({ issues: formattedIssues })
  } catch (error) {
    console.error("Error fetching issues:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
