-- Create quiz_responses table to store user quiz submissions
CREATE TABLE public.quiz_responses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  team_size INTEGER NOT NULL,
  manual_hours_per_week INTEGER NOT NULL,
  tech_stack_maturity TEXT NOT NULL,
  process_documentation TEXT NOT NULL,
  budget_readiness TEXT NOT NULL,
  timeline TEXT NOT NULL,
  readiness_score INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.quiz_responses ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert quiz responses (public quiz)
CREATE POLICY "Anyone can submit quiz responses"
ON public.quiz_responses
FOR INSERT
WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX idx_quiz_responses_email ON public.quiz_responses(email);
CREATE INDEX idx_quiz_responses_created_at ON public.quiz_responses(created_at DESC);