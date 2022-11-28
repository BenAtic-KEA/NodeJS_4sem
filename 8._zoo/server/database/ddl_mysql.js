import db from "./connection_mysql.js";

// task Define a table that contains animals
const isInDeleteMode = true;

if(isInDeleteMode){
    db.execute(`
        DROP TABLE IF EXISTS animal_feed_types;
    `);  
    db.execute(`
        DROP TABLE IF EXISTS animal_feed_stock;
    `)
}
db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_types (
            id INTEGER PRIMARY KEY AUTO_INCREMENT,
            name varchar(255),
            description TEXT,
            is_vegetarian BOOLEAN
        );
    `);
    
db.execute(`CREATE TABLE IF NOT EXISTS animal_feed_stock (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        comment VARCHAR(255),
        added_to_stock DATE,
        animal_feed_types_id INTEGER,
        FOREIGN KEY (id) REFERENCES animal_feed_types(id)
    );
`);

if(isInDeleteMode) {

    db.execute(`INSERT INTO animal_feed_types (name, description, is_vegetarian) 
    VALUES ("Tiger","",False)`);
    
    db.execute(`INSERT INTO animal_feed_types (name, description, is_vegetarian) 
    VALUES ("Tiger","",False)`);
    
    db.execute(`INSERT INTO animal_feed_stock (common_name, latin_name) 
    VALUES ("Panda","ailuropoda melanoleuca")`);

}




db.end();