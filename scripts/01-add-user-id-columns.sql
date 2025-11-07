-- Add user_id column to issues table
ALTER TABLE issues ADD COLUMN user_id TEXT;

-- Add user_id column to feedback table
ALTER TABLE feedback ADD COLUMN user_id TEXT;

-- Add user_id column to notifications table
ALTER TABLE notifications ADD COLUMN user_id TEXT;

-- Create index on user_id for faster queries
CREATE INDEX idx_issues_user_id ON issues(user_id);
CREATE INDEX idx_feedback_user_id ON feedback(user_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
