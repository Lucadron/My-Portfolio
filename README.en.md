# My Portfolio – Backend API (English)

📖 [Türkçe sürümü burada](README.md)

## 🎯 Purpose of the Project

This project is a customizable portfolio API developed for software developers to manage their own project entries and use it during job applications with a modern, production-ready backend infrastructure.

## 🧱 Technologies Used

- **Node.js** – Backend runtime environment
- **Express.js** – REST API framework
- **TypeScript** – Type-safe development
- **MongoDB + Mongoose** – Database and schema modeling
- **Zod** – Runtime validation of request payloads
- **Git & GitHub** – Version control and source code hosting

## ✅ Progress So Far

| Step | Description |
|------|-------------|
| Express + TypeScript setup | Core backend initialized |
| Folder structure | Modular folders (`controllers`, `routes`, etc.) created |
| MongoDB connection | Database connected via `connectDB()` |
| Project model | `IProject` interface + `ProjectSchema` implemented |
| CRUD operations | `POST`, `GET`, `GET:id`, `PUT:id`, `DELETE:id` fully functional |
| Validation | Zod used to validate all incoming data |
| Git initiated | Project under version control |
| GitHub repo | [Repository link](https://github.com/Lucadron/My-Portfolio)

## 🔧 Setup

```bash
git clone https://github.com/Lucadron/My-Portfolio.git
cd My-Portfolio
npm install
npm run dev
