import { getConnection } from '../../lib/db'

export default async function handler(req, res) {
  const conn = await getConnection()
  await conn.execute(
    'CREATE TABLE IF NOT EXISTS settings (id INT PRIMARY KEY, showRedBox BOOLEAN DEFAULT TRUE)'
  )

  const [rows] = await conn.execute('SELECT * FROM settings WHERE id = 1')
  if (!rows.length) {
    await conn.execute('INSERT INTO settings (id, showRedBox) VALUES (1, TRUE)')
  }

  if (req.method === 'GET') {
    const [data] = await conn.execute('SELECT showRedBox FROM settings WHERE id = 1')
    await conn.end()
    const row = data[0] || { showRedBox: true }
    return res.status(200).json({ showRedBox: !!row.showRedBox })
  }

  if (req.method === 'POST') {
    if (req.query.admin !== 'true') {
      await conn.end()
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const { showRedBox } = req.body ?? {}
    if (showRedBox === undefined) {
      await conn.end()
      return res.status(400).json({ message: 'showRedBox is required' })
    }

    await conn.execute('UPDATE settings SET showRedBox = ? WHERE id = 1', [
      showRedBox ? 1 : 0,
    ])
    await conn.end()
    return res.status(200).json({ showRedBox: !!showRedBox })
  }

  await conn.end()
  res.status(405).end()
}
