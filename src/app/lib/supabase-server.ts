import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Supabase URL o Service Role Key non definita');
}



const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

export default supabaseAdmin;