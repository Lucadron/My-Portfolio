import dotenv from 'dotenv';
dotenv.config();

// PORT numarasını belirliyoruz (8008 veya ortamdan gelen değer)
export const PORT = process.env.PORT || 8008;
export const MONGODB_URI = process.env.MONGODB_URI || '';