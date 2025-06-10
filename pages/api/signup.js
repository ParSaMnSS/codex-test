import { getConnection } from '../../lib/db'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing fields' })
  }

  const conn = await getConnection()
  await conn.execute(
    'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) UNIQUE, password VARCHAR(255), isAdmin BOOLEAN DEFAULT FALSE)'
  )

  try {
    const [existing] = await conn.execute('SELECT id FROM users WHERE email = ?', [email])
    if (Array.isArray(existing) && existing.length) {
      return res.status(409).json({ message: 'User already exists' })
    }

    const hashed = await bcrypt.hash(password, 10)
    await conn.execute('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashed])
    res.status(201).json({ message: 'User created' })
  } catch (err) {
    console.error('Signup error:', err)
    res.status(500).json({ message: 'Database error' })
  } finally {
    await conn.end()
  }
}
