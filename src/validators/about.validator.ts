import { z } from 'zod';

export const updateAboutSchema = z.object({
  content: z
    .string()
    .min(10, { message: 'Hakkımda yazısı en az 10 karakter olmalıdır.' })
});

export type UpdateAboutInput = z.infer<typeof updateAboutSchema>;
