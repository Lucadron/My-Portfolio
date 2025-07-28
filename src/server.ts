// app.ts dosyasındaki Express uygulamasını içe aktarıyoruz
import app from './app';
import { PORT } from './config/env';
import { connectDB } from './config/db';

connectDB();


// Sunucuyu başlatıyoruz
app.listen(PORT, () => {
  console.log(`Server ${PORT} portundan çalışıyor.`);
});
