-- Up
CREATE TABLE Person(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
)

CREATE TABLE vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER FOREIGN KEY REFERENCES Person(id)
)

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;