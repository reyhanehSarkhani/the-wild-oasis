import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bckowovhfvogsrrlwwbg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJja293b3ZoZnZvZ3Nycmx3d2JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NjkyNTEsImV4cCI6MjA5MTE0NTI1MX0.sdcRfKiDAB4jCuXHCJT9Y8sUucysCDdTvHzjl_hUumU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
