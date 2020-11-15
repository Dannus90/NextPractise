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

    if(req.method === 'PUT') {
        const statement = await db.prepare('UPDATE person SET name= ?, email = ? WHERE id = ?');
        const result = await statement.run(req.body.email, req.body.name, req.query.id);
        result.stmt;
    }
    
    const person = await db.get('SELECT * FROM person WHERE id = ?', [req.query.id])
    res.json(person)
}