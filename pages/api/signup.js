import { getConnection } from '../../lib/db'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' })
  const hashed = await bcrypt.hash(password, 10)
  const conn = await getConnection()
  await conn.execute('CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) UNIQUE, password VARCHAR(255), isAdmin BOOLEAN DEFAULT FALSE)')
  try {
    await conn.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashed])
    res.status(201).json({ message: 'User created' })
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' })
  } finally {
    await conn.end()
  }
}
