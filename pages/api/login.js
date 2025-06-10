import { getConnection } from '../../lib/db'
import bcrypt from 'bcryptjs'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const { email, password } = req.body
  const conn = await getConnection()
  const [rows] = await conn.execute('SELECT id, password, isAdmin FROM users WHERE email = ?', [email])
  await conn.end()
  if (!rows.length) return res.status(401).json({ message: 'Invalid credentials' })
  const user = rows[0]
  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) return res.status(401).json({ message: 'Invalid credentials' })
  res.status(200).json({ id: user.id, email, isAdmin: !!user.isAdmin })
}
