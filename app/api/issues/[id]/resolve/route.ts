import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const issueId = params.id
    const supabase = await createClient()

    const { data: issue, error: fetchError } = await supabase.from("issues").select("*").eq("id", issueId).single()

    if (fetchError || !issue) {
      return NextResponse.json({ error: "Issue not found" }, { status: 404 })
    }

    const { data: updatedIssue, error: updateError } = await supabase
      .from("issues")
      .update({
        status: "resolved",
        updated_at: new Date().toISOString(),
      })
      .eq("id", issueId)
      .select()
      .single()

    if (updateError) {
      throw updateError
    }

    const { data: notification, error: notificationError } = await supabase
      .from("notifications")
      .insert({
        email: issue.email,
        bt_id: issue.bt_id,
        title: "Issue Resolved",
        message: `Your issue in ${issue.category} has been resolved. We appreciate your patience!`,
      })
      .select()
      .single()

    if (notificationError) {
      console.error("Error creating notification:", notificationError)
    }

    console.log("Issue resolved:", updatedIssue)
    console.log("Notification sent:", notification)

    return NextResponse.json({ success: true, issue: updatedIssue, notification }, { status: 200 })
  } catch (error) {
    console.error("Error resolving issue:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
