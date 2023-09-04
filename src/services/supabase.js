import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://ihddmzoujobbswmujplp.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloZGRtem91am9iYnN3bXVqcGxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE5MDkyODksImV4cCI6MjAwNzQ4NTI4OX0.k12KOf5pTDJ_D4EbMEPgqvE81GTgt8fGyTGN23sp8ss'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
