import { z } from 'zod';

// Yeni hobi ekleme
export const createHobbySchema = z.object({
    title: z.string().min(2, { message: 'Başlık en az 2 karakter olmalıdır.' }),
    description: z.string().min(5, { message: 'Açıklama en az 5 karakter olmalıdır.' }),
    icon: z.string().min(1, { message: 'Emoji veya görsel linki zorunludur.' }),
    order: z.number().optional()
});

// Hobi güncelleme
export const updateHobbySchema = z.object({
    title: z.string().min(2).optional(),
    description: z.string().min(5).optional(),
    icon: z.string().min(1).optional(),
    order: z.number().optional()
});

// Tipler
export type CreateHobbyInput = z.infer<typeof createHobbySchema>;
export type UpdateHobbyInput = z.infer<typeof updateHobbySchema>;
