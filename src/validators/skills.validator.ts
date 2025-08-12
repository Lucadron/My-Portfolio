import { z } from 'zod';

// Yeni beceri ekleme
export const createSkillSchema = z.object({
  name: z.string().min(2, { message: 'Beceri adı en az 2 karakter olmalı' }),
  level: z.enum(['Başlangıç', 'Orta', 'İleri']),
  order: z.number().optional()
});

// Beceri güncelleme
export const updateSkillSchema = z.object({
  name: z.string().min(2).optional(),
  level: z.enum(['Başlangıç', 'Orta', 'İleri']).optional(),
  order: z.number().optional()
});

// Tipler
export type CreateSkillInput = z.infer<typeof createSkillSchema>;
export type UpdateSkillInput = z.infer<typeof updateSkillSchema>;
