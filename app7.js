const express = require('express');
const mysql2 = require('mysql2');

const PORT = process.env.PORT || 3000;
const app = express();


//mysql connection
const con = mysql2.createConnection({
    host: "localhost",
    port: 3306,
    user: "Gerard Tolentino",
    password: "L09398875884jus",
    database: "IICSDb"
  })

//callback
con.connect((err) =>{
    if(!err){
        console.log("connected to MySQL server at port 3306...");
    }else{
        console.log("error not connected to MYSQL Server")
    }
});

//database
app.get("/first", (req, res) => {
    let sql = "CREATE DATABASE IICSDb";
    con.query(sql, (err,result) => {
        if(!err){
            res.send("Successfully created database");
        }else{
            res.send("failed to create student database....")
        }
    })
})

//table 
app.get("/second", (req, res) => {
    let sql = "CREATE TABLE student(studID, fName, lName))";
    con.query(sql, (err,result) => {
        if(!err){
            res.send(result);
        }else{
            res.send("failed to create student table....")
        }
    })
})


//create
app.get("/third", (req, res) => {
    let newRow = {studID: 2018889305, fName: Gerard, lName: Tolentino};
    let sql = "INSERT INTO stat SET ?";
    con.query(sql, newRow, (err,result) => {
        if(!err){
            res.send(result);
        }else{
            res.send("failed to insert into student table....")
        }
    });
});

//read
app.get("/fourth", (req, res) => {
    let sql = "SELECT * FROM stat";
    con.query(sql,(err,result) => {
        if(!err){
            res.send(result);
        }else{
            res.send("failed to read student table....")
        }
    });
});

//port
app.listen(PORT, () => {
    console.log("Listening to PORT " + PORT + "....");
   });
