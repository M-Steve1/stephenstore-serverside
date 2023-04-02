import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Database } from './types/supabase';
import envVariables from './config';
const {
  supabaseUrl,
  supabaseAnonKey,
  supabaseUrlTest,
  supabaseAnonKeyTest,
  env
} = envVariables;

let client: SupabaseClient;

if (env === 'dev') {
  client = createClient<Database>(
    supabaseUrl as string,
    supabaseAnonKey as string
  );
} else {
  client = createClient<Database>(
    supabaseUrlTest as string,
    supabaseAnonKeyTest as string
  );
}

export default client;
