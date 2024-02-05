[1mdiff --git a/infra/database.js b/infra/database.js[m
[1mindex f47fa63..879080e 100644[m
[1m--- a/infra/database.js[m
[1m+++ b/infra/database.js[m
[36m@@ -8,12 +8,20 @@[m [masync function query(queryObject) {[m
     database: process.env.POSTGRES_DB,[m
     password: process.env.POSTGRES_PASSWORD,[m
   });[m
[31m-  await client.connect();[m
[32m+[m[32m  console.log("Credenciais do Postgres:", {[m
[32m+[m[32m    host: process.env.POSTGRES_HOST,[m
[32m+[m[32m    port: process.env.POSTGRES_PORT,[m
[32m+[m[32m    user: process.env.POSTGRES_USER,[m
[32m+[m[32m    database: process.env.POSTGRES_DB,[m
[32m+[m[32m    password: process.env.POSTGRES_PASSWORD,[m
[32m+[m[32m  });[m
   try {[m
[32m+[m[32m    await client.connect();[m
     const result = await client.query(queryObject);[m
     return result;[m
   } catch (error) {[m
     console.error(error);[m
[32m+[m[32m    throw error;[m
   } finally {[m
     await client.end();[m
   }[m
