import { NextApiRequest, NextApiResponse } from 'next'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'


export default async function getPeople(req: NextApiRequest, res: NextApiResponse) {
    const [db] = await Promise.all([
        open({
        filename: '/tmp/database.db',
        driver: sqlite3.Database
        }),
    ])
    
    const people = await db.all('SELECT * FROM person')
    res.json(people)
}