import { NextApiRequest, NextApiResponse } from 'next'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export default async function getAllPeople(req: NextApiRequest, res: NextApiResponse) {
    const [db] = await Promise.all([
        open({
        filename: '/tmp/database.db',
        driver: sqlite3.Database
        }),
    ])
    
    const allVehicles = await db.all('SELECT * FROM vehicle WHERE ownerId = ?', [req.query.id])
    res.json(allVehicles)
}