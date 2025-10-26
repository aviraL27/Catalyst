-- Add bt_id column to feedback table
ALTER TABLE public.feedback
ADD COLUMN IF NOT EXISTS bt_id TEXT;

-- Add bt_id column to notifications table
ALTER TABLE public.notifications
ADD COLUMN IF NOT EXISTS bt_id TEXT;

-- Create index on bt_id for faster queries
CREATE INDEX IF NOT EXISTS idx_feedback_bt_id ON public.feedback(bt_id);
CREATE INDEX IF NOT EXISTS idx_feedback_email ON public.feedback(email);
CREATE INDEX IF NOT EXISTS idx_notifications_bt_id ON public.notifications(bt_id);
CREATE INDEX IF NOT EXISTS idx_notifications_email ON public.notifications(email);
CREATE INDEX IF NOT EXISTS idx_issues_bt_id ON public.issues(bt_id);
CREATE INDEX IF NOT EXISTS idx_issues_email ON public.issues(email);

-- Add comments to document the schema
COMMENT ON COLUMN public.feedback.bt_id IS 'Student BT ID for personalized tracking';
COMMENT ON COLUMN public.notifications.bt_id IS 'Student BT ID for personalized tracking';
