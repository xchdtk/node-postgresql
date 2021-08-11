import * as express from "express";
const app = express();
const { Client } = require('pg');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const pg = new Client({
    user: "",
    database: "node_postgres",
    password: "xwlstn12",
    port: 5432
});
pg.connect();
// // postgresql 쿼리를 날리는 부분
// pg.query("SELECT * FROM node", (err, res) => {
//     try{
//         console.log(res.rows, "행복해지자")
//     } catch(err) {
//         console.log(err)
//     }
//     pg.end()
// })
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.send("아 행복캠");
});
// prisma를 통해 post요청을 통해 데이터 create
app.post('/node', async (request, response) => {
    const { username } = request.body;
    const node = await prisma.node.create({
        data: {
            username: username
        }
    });
    response.send({
        status: "success"
    }).status(200);
});
app.listen(3000, () => {
    console.log("server is running");
});
