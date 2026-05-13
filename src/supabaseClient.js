import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zymmnbpawspfewgpscoy.supabase.co/rest/v1/'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bW1uYnBhd3NwZmV3Z3BzY295Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg2MjAwNDEsImV4cCI6MjA5NDE5NjA0MX0.M1YPISOxlcXrtG4Q9ePdAluf2O9ws9ErZnkbuNeVBLk'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)