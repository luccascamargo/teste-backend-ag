import { z } from 'zod';

export const envSchema = z.object({
    DB_HOST: z.string().min(1, 'DB_HOST é obrigatório'),
    DB_PORT: z.coerce.number().positive('DB_PORT deve ser um número válido'),
    DB_USER: z.string().min(1, 'DB_USER é obrigatório'),
    DB_PASSWORD: z.string().min(1, 'DB_PASSWORD é obrigatório'),
    DB_NAME: z.string().min(1, 'DB_NAME é obrigatório'),
    PORT: z.coerce.number().default(3000),
});

export type EnvSchema = z.infer<typeof envSchema>;
