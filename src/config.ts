import * as dotenv from 'dotenv';

dotenv.config();

export default {
  host: process.env['PGHOST'],
  envDB: process.env['PGENVDB'],
  user: process.env['PGUSER'],
  password: process.env['PGPASSWORD'],
  port: process.env['PGPORT'] as unknown as number,
  env: process.env['ENV'],
  testDB: process.env['PGTESTDB'],
  pepper: process.env['BCRYPTPASSWORD'],
  saltRounds: process.env['SALTROUNDS'] as string,
  jwtSecret: process.env['JWTSECRET']
};
