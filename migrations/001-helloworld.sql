--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
);

CREATE TABLE vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

INSERT INTO person (name, email) values ("Daniel", "Danielperra@gmail.com");
INSERT INTO person (name, email) values ("Jack", "Jackperra@gmail.com");

INSERT INTO vehicle (brand, model, ownerId) values("audi", "R8", 1);
INSERT INTO vehicle (brand, model, ownerId) values("mercedes", "benz", 1);

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Person;
DROP TABLE Vehicle;
