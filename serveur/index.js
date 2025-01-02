const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mysql =  require("mysql2")


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"annuaire",
})

app.get("/api/get", (req,res)=>{
    const request = "SELECT * FROM contact"
    db.query(request,(error,result)=>{
        res.send(result)
    })
})

app.post("/api/post",(req,res)=>{
    const {nom,mail,tel} = req.body
    const request = "INSERT INTO contact(nom,mail,tel) VALUES(?,?,?)"
    console.log("Données reçues :", { nom,mail,tel});
    db.query(request,[nom,mail,tel],(error,result)=>{
        if(error){
            console.log(error)
        }
    })
})

app.listen(8000)