
const condetails = require("./conproperties")
const mysql = require('mysql2/promise');

async function main() {
    try {
        // create the connection
        const connection = await mysql.createConnection(condetails)
        // query database
        const [rows] = await connection.execute('SELECT * FROM departments');
        console.log(rows)
        connection.close()
    }
    catch (error) {
        console.log(error)
    }
}

main()


