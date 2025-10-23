import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
	NODE_ENV: z.enum(["dev", "test", "production"]).default("production"),
	PORT: z.coerce.number().default(3333),
});

//Verifica se o schema criado bate com o schema que existe dentro do arquivo .env do ambiente do projeto
const _env = envSchema.safeParse(process.env);

if (!_env.success) {
	console.log("❌ Invalid Envirnment variables", z.treeifyError(_env.error));

	throw new Error("Invalid Environment Variables.");
}

export const env = _env.data;
