import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

(async () => {
    const [db] = await Promise.all([
        open({
        filename: '/tmp/database.db',
        driver: sqlite3.Database
        }),
    ])
    await db.migrate({
        force: true, 
        migrationsPath: './migrations'
    })

    const people = await db.all('SELECT * FROM person');
    console.log("All people", JSON.stringify(people, null, 2))

    const vehicles = await db.all('SELECT * FROM vehicle');
    console.log("All vehicles", JSON.stringify(vehicles, null, 2))
})()