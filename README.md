# My Portfolio – Backend API (Türkçe)

📖 [View this README in English](README.en.md)

## 🎯 Proje Amacı

Bu proje, yazılım geliştiricilerin kendi portföy projelerini yönetebilmesi ve başvuru süreçlerinde modern bir API altyapısıyla profesyonel görünüm sunması için geliştirilmiştir.

## 🧱 Kullanılan Teknolojiler

- **Node.js** – Sunucu ortamı
- **Express.js** – REST API framework
- **TypeScript** – Tip güvenliği için statik dil
- **MongoDB + Mongoose** – Veritabanı ve şema yönetimi
- **Zod** – API istekleri için runtime doğrulama
- **Git & GitHub** – Versiyon kontrol ve kaynak kod barındırma

## ✅ Şu ana kadar yapılanlar

| Aşama | Açıklama |
|-------|----------|
| Express + TS kurulumu | Temel back-end altyapısı oluşturuldu |
| Dosya yapısı | `controllers/`, `routes/`, `services/`, `models/`, `validators/` klasörleri oluşturuldu |
| MongoDB bağlantısı | `connectDB()` fonksiyonu ile başarıyla entegre edildi |
| Proje modeli | `IProject` interface + `ProjectSchema` tanımlandı |
| CRUD işlemleri | `POST`, `GET`, `GET:id`, `PUT:id`, `DELETE:id` endpoint’leri çalışır durumda |
| Validasyon | Tüm endpoint’lerde `zod` ile veri doğrulama sağlandı |
| Git kurulumu | Git ile version kontrol sistemi başlatıldı |
| GitHub bağlantısı | [Repo bağlantısı](https://github.com/Lucadron/My-Portfolio)

## 🔧 Kurulum

```bash
git clone https://github.com/Lucadron/My-Portfolio.git
cd My-Portfolio
npm install
npm run dev
