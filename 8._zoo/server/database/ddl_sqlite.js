import db from "./connection_sqlite.js";

// task Define a table that contains animals
const isInDeleteMode = true;

if(isInDeleteMode){
    db.exec(`
        DROP TABLE IF EXISTS animals
    `)
}
db.exec(`CREATE TABLE IF NOT EXISTS animals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        common_name VARCHAR(255), 
        latin_name VARCHAR(255)
        )
    `);

if(isInDeleteMode) {

    db.run(`INSERT INTO animals (common_name, latin_name) 
    VALUES ("Tiger","Panthera tigris")`);
    
    db.run(`INSERT INTO animals (common_name, latin_name) 
    VALUES ("Panda","ailuropoda melanoleuca")`);


}