import { z } from 'zod';

export const updateCvSchema = z.object({
  cvUrl: z.string().refine((val) => {
    try {
      new URL(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: 'Geçerli bir URL giriniz.'
  })
});

export type UpdateCvInput = z.infer<typeof updateCvSchema>;
