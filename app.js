const express = require('express')
const app = express();

const { Client } = require('pg');

const pg = new Client({
    user: "kimjinsoo",
    database: "postgres",
    password: "xwlstn12",
    port: 5432

});  

pg.connect();

pg.query("SELECT * FROM users", (err, res) => {
    try{
        console.log(res, "행복해지자")
    } catch(err) {
        console.log(err)
    }
    pg.end()
})

app.get('/', (req, res) => {
    res.send("아 행복캠")
})

app.listen(3000, () => {
    console.log("server is running")
})
