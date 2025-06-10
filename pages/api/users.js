import { getConnection } from '../../lib/db'

export default async function handler(req, res) {
  const { admin } = req.query
  if (admin !== 'true') return res.status(401).json({ message: 'Unauthorized' })
  const conn = await getConnection()
  const [rows] = await conn.execute('SELECT id, email FROM users')
  await conn.end()
  res.status(200).json(rows)
}
