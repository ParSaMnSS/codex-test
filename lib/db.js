import mysql from 'mysql2/promise'

export async function getConnection() {
<<<<<<< HEAD
  const host = process.env.DB_HOST || 'localhost'
  const user = process.env.DB_USER || 'root'
  const password = process.env.DB_PASS || ''
  const database = process.env.DB_NAME || 'testdb'

  // Connect without specifying DB first so we can create it if needed
  const connection = await mysql.createConnection({ host, user, password })
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``)
  await connection.changeUser({ database })
=======
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'testdb',
  })
>>>>>>> origin/main
  return connection
}
