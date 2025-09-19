import mysql from 'mysql2/promise'

export async function getConnection() {
  const host = process.env.DB_HOST || 'localhost'
  const user = process.env.DB_USER || 'root'
  const password = process.env.DB_PASS || ''
  const database = process.env.DB_NAME || 'testdb'

  const connection = await mysql.createConnection({ host, user, password })
  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\``)
  await connection.changeUser({ database })

  return connection
}
