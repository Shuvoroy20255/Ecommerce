(Run Command): npm run dev

# Frontend 
http://localhost:5000

(এখন পরের ধাপ

Backend terminal চালু রাখুন।

নতুন Terminal খুলে Frontend-এ যান:

cd D:\Ecommerce\frontend

যদি frontend তৈরি না করে থাকেন:

npm create vite@latest . -- --template react
npm install

Run করুন:

npm run dev

Expected:

Local: http://localhost:5173/
Backend API Test

PowerShell:

curl http://localhost:5000

অথবা Browser:

http://localhost:5000)

# Backend
(1. Backend Folder-এ যান
2. Dependencies Install
npm install

যদি node_modules না থাকে:

npm install express mongoose dotenv cors bcryptjs jsonwebtoken
npm install nodemon --save-dev
3. Check Scripts
npm run

আপনি dev এবং start দেখতে পাবেন।

4. Run Backend
npm run dev

অথবা

npm start
5. Check MongoDB Connection

যদি Local MongoDB ব্যবহার করেন:

mongosh

তারপর:

show dbs
6. Frontend Folder-এ যান
cd D:\Ecommerce\frontend
7. Install Frontend Dependencies
npm install
8. Run React/Vite Frontend
npm run dev

Expected:

Local: http://localhost:5173/
9. Test Backend API

Browser-এ খুলুন:

http://localhost:5000)