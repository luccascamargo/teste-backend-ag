import { config } from 'dotenv';
import { envSchema, EnvSchema } from './env.schema';

config();

export function validateEnv(): EnvSchema {
    const parsed = envSchema.safeParse(process.env);

    if (!parsed.success) {
        console.error('Erro na validação das variáveis de ambiente:');
        console.error(parsed.error.format());
        process.exit(1);
    }

    return parsed.data;
}
