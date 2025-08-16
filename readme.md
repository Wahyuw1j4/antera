# Interview Test Wahyu Wijaya
## Langkah instalasi lokal.
1. Clone github 
2. jalankan di command ```npm install```
3. Buat database dengan nama antera2
4. jalankan command ```npx sequelize:migrate```
5. jalankan command ```npm run dev```
## Setup pengembangan
Menggunakan runtime Node Js versi 22, dengan framework express js dengan ORM sequelize dan database PosgreSql
## Cara menjalankan dengan Docker.
1. Clone github 
2. Jalankan command 
```bash
docker run -d \ --name antera-app \ -p 3000:3000 \ -e NODE_ENV=production \ -e DATABASE_URL=postgresql://postgres:lawrance24@db:5432/antera2?schema=public \ -v $(pwd):/app \ -v /app/node_modules \ antera-app npm start
```

## URL API yang sudah live.
https://antera.wahyuwijaya.biz.id/
## Dokumentasi endpoint.
```https://documenter.getpostman.com/view/44848605/2sB3BHkohw```