-- Add new columns for enhanced quiz data
ALTER TABLE public.quiz_responses 
ADD COLUMN primary_processes text[],
ADD COLUMN data_infrastructure text,
ADD COLUMN current_ai_adoption text,
ADD COLUMN team_ai_readiness text,
ADD COLUMN workflow_complexity text,
ADD COLUMN compliance_requirements text,
ADD COLUMN cultural_score integer,
ADD COLUMN technical_score integer,
ADD COLUMN usecase_score integer;