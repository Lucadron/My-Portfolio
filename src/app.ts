// Express framework'ünü içe aktarıyoruz
import express from 'express';
import pingRouter from './routes/ping.route';
import projectRouter from './routes/project.route';
import authRouter from './routes/auth.route';
import aboutRouter from './routes/about.route';


// Bir Express uygulaması başlatıyoruz
const app = express();

// JSON formatındaki isteklerin body’sini parse edebilmek için middleware ekliyoruz
app.use(express.json());

// API routing
app.use('/api', pingRouter);
app.use('/api', projectRouter);
app.use('/api/overlord', authRouter);
app.use('/api/about', aboutRouter);

// Test amaçlı bir GET endpoint tanımlıyoruz
// Tarayıcıdan http://localhost:8008/ yazıldığında bu çalışır
app.get('/', (req, res) => {
  res.send('Portfolyo Backend çalışıyor.');
});

// Uygulamayı dışarıya aktarıyoruz (server.ts kullanacak)
export default app;
