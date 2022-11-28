import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host:"localhost",
    user:"nodejs",
    password:"password",
    database:"zoo"
});

export default connection