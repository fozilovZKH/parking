# api-getway
1. cd api-getway
2. npm i
3. npm run start:prod

# file
1. cd file
2. npm i
3. npm run migration:generate -- src/database/migration/file
4. npm run migration:run
6. npm run start:prod

# user
1. cd user
2. npm i
3. npm run migration:generate -- src/database/migration/user
4. npm run migration:run
5. npm run seed:run
6. npm run start:prod

# park
1. cd park
2. npm i
3. npm run migration:generate -- src/database/migration/park
4. npm run migration:run
5. npm run seed:run
6. npm run start:prod

# transaction
1. cd transaction
2. npm i
3. npm run migration:generate -- src/database/migration/transaction
4. npm run migration:run
5. npm run seed:run
6. npm run start:prod


# user login_parol

1. admin
   phone: '+998946484754'
   password: 12345

2. owner
   phone: '+998946484754'
   password: seed parol

3. client
   phone: '+998946484754' 
   password: 12345