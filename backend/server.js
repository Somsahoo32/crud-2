const mysql = require('mysql2');
const express = require("express");
const cors = require('cors');
const bodyparser = require('body-parser');


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.json());


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Soumya@2001',
    database: 'crud'
  });
  
  connection.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to database');
  });


app.get("/user",(req,res)=>{
    const sql = "SELECT * FROM user";
    connection.query(sql,(err,data)=>{
        if(err) return res.json("Error");
        return res.json(data);
    })
});

app.post('/create',(req,res)=>{
    const sql = "INSERT INTO user(`username`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    connection.query(sql,[values],(err,data)=>{
        if(err)return res.json("Error");
        return res.json(data);
    })
})

app.put('/update/:id',(req,res)=>{
    const sql = "update user set `username` = ?, `email` = ?, `password` = ? where id = ?";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    const id = req.params.id;
    connection.query(sql,[...values, id],(err,data)=>{
        if(err)return res.json("Error");
        return res.json(data);
    })
})


app.delete('/user/:id',(req,res)=>{
    const sql = "DELETE FROM user WHERE id = ?";
    const id =req.params.id;
    connection.query(sql,[id],(err,data)=>{
        if(err)return res.json("Error");
        return res.json(data);
    })
})




app.listen(8084,() => {
    console.log("server is listening to port 8084");
});


