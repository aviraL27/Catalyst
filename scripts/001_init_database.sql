-- Create issues table
CREATE TABLE IF NOT EXISTS public.issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bt_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  category TEXT NOT NULL,
  urgency TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'open',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create feedback table
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  email TEXT,
  message TEXT NOT NULL,
  rating INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Create policies for issues (allow all reads/writes for now - can be restricted later)
CREATE POLICY "Allow all reads on issues" ON public.issues FOR SELECT USING (true);
CREATE POLICY "Allow all inserts on issues" ON public.issues FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all updates on issues" ON public.issues FOR UPDATE USING (true);

-- Create policies for feedback
CREATE POLICY "Allow all reads on feedback" ON public.feedback FOR SELECT USING (true);
CREATE POLICY "Allow all inserts on feedback" ON public.feedback FOR INSERT WITH CHECK (true);

-- Create policies for notifications
CREATE POLICY "Allow all reads on notifications" ON public.notifications FOR SELECT USING (true);
CREATE POLICY "Allow all inserts on notifications" ON public.notifications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow all updates on notifications" ON public.notifications FOR UPDATE USING (true);
