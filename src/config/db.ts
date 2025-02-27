import { Sequelize } from 'sequelize'

const db = new Sequelize('postgresql://rest_api_node_typescript_li5q_user:f9pnrmiwPjbYBQVcX1YAUiFaPDeQEUmb@dpg-cv0e3n23esus73e8aj30-a.oregon-postgres.render.com/rest_api_node_typescript_li5q?ssl=true')

export default db