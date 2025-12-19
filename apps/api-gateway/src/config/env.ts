import 'dotenv/config';
import z from 'zod';

export const envSchema = z.object({
  PORT: z.number().default(3000),
  NATS_SERVERS: z.string().transform((val) => val.split(',')),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  throw new Error(`.env file is invalid: ${parsedEnv.error.issues[0].message}`);
}

export const env = parsedEnv.data;