// İş mantığını kontrolör dosyasına yazarız
// Böylece route dosyaları sadece yönlendirme yapar

import { Request, Response } from 'express';

export const ping = (req: Request, res: Response) => {
  res.status(200).json({ message: 'pong 🏓' });
};
