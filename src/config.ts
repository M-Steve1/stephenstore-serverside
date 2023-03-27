import * as dotenv from 'dotenv';

dotenv.config();

export default {
  supabaseUrl: process.env['SUPABASEURL'],
  supabaseAnonKey: process.env['APIKEY'],
  supabaseUrlTest: process.env['SUPABASE_URL_TEST'],
  supabaseAnonKeyTest: process.env['API_KEY_TEST'],
  env: process.env['ENV'],
  pepper: process.env['BCRYPTPASSWORD'],
  saltRounds: process.env['SALTROUNDS'] as string,
  jwtSecret: process.env['JWTSECRET']
};
