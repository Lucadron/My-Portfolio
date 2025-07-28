import { z } from 'zod';

// Proje eklerken gelen verilerin doğrulamasını yapıyoruz
export const createProjectSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  githubUrl: z.string().refine((val) => {
    try {
      new URL(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: 'Geçerli bir URL giriniz.'
  }).optional(),
  imageUrl: z.string().refine((val) => {
    try {
      new URL(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: 'Geçerli bir URL giriniz.'
  }).optional(),
  tags: z.array(z.string()).optional()
});

// Request'teki body'yi validasyona sokmak için bir tip çıkartıyoruz
export type CreateProjectInput = z.infer<typeof createProjectSchema>;

// Güncelleme şeması: tüm alanlar opsiyonel olabilir
export const updateProjectSchema = z.object({
  title: z.string().min(3).optional(),
  description: z.string().min(10).optional(),
  githubUrl: z.string().refine((val) => {
    try {
      new URL(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: 'Geçerli bir URL giriniz.'
  }).optional(),
  imageUrl: z.string().refine((val) => {
    try {
      new URL(val);
      return true;
    } catch {
      return false;
    }
  }, {
    message: 'Geçerli bir URL giriniz.'
  }).optional(),
  tags: z.array(z.string()).optional()
});



export type UpdateProjectInput = z.infer<typeof updateProjectSchema>;
