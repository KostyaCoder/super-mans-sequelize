npx sequelize db:drop
npx sequelize db:create

npx sequelize db:migrate
npx sequelize db:seed:all

npm run start

# npx sequelize model:generate --name Superman --attributes nickname:string,description:string,originDescription:text,catchPhrase:string
# npx sequelize model:generate --name Superpowers --attributes name:string
# npx sequelize model:generate --name Images --attributes path:string
# npx sequelize migration:generate --name manss_to_powers

# npx sequelize seed:generate --name create_man
# npx sequelize seed:generate --name create_power

# npx sequelize db:migrate:undo --name 20230825164723-create-superpowers
# npx sequelize db:migrate:undo --name 20230825171246-mans_to_powers 

# npx sequelize db:migrate --name 20230825164723-create-superpowers
# npx sequelize db:migrate --name 20230825171246-mans_to_powers
