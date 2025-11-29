-- Add business type column
ALTER TABLE public.quiz_responses 
ADD COLUMN business_type text;