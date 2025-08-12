// Express framework'ünü içe aktarıyoruz
import express from 'express';
import path from 'path';
import pingRouter from './routes/ping.route';
import projectRouter from './routes/project.route';
import authRouter from './routes/auth.route';
import aboutRouter from './routes/about.route';
import cvRouter from './routes/cv.route';
import skillRouter from './routes/skills.route';

// Bir Express uygulaması başlatıyoruz
const app = express();

// JSON formatındaki isteklerin body’sini parse edebilmek için middleware ekliyoruz
app.use(express.json());

// API routing
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api', pingRouter);
app.use('/api/projects', projectRouter);
app.use('/api/overlord', authRouter);
app.use('/api/about', aboutRouter);
app.use('/api/cv', cvRouter);
app.use('/api/skills', skillRouter);

// Test amaçlı bir GET endpoint tanımlıyoruz
// Tarayıcıdan http://localhost:8008/ yazıldığında bu çalışır
app.get('/', (req, res) => {
  res.send('Portfolyo Backend çalışıyor.');
});

// Uygulamayı dışarıya aktarıyoruz (server.ts kullanacak)
export default app;
