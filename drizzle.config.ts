import { config } from 'dotenv';
import { expand } from 'dotenv-expand';
import { defineConfig } from 'drizzle-kit';

expand(config());

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema/*',
  out: './drizzle',
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
});
