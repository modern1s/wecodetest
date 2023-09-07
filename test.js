// 1. 노드제이스 세팅
const http = require('http')
const express = require('express')
const typeorm = require ('typeorm')
const cors = require('cors')
const mysql = require ('mysql')
const nodemon = require ('nodemon')
const mysql2 = require ('mysql2')

const {DataSource} = require('typeorm')
const myDataSource =  new DataSource({
  type: 'mysql', 
  host: 'localhost', 
  port: '3306',
  username: 'root',
  password: 'Hi1',
  database: 'westagram'})

const app = express()
app.use(express.json())
app.use(cors())
// 2. users 화면생성
app.listen(3000, function () {
  console.log('server listening on port 3000')
})


app.get('/', async(req,res)=>{
  try{return res.status(200).json{
    "message" : "wellcome to soonhyung's server"
  }}
})catch (error) 
res.status(500).json({messag : error.message})


// 3. 유저 생성하여 db에 넣기
qpp.get('/users',async(req,res)=>{
  try{
  const userData = await myDataSource.query(`
  INSERT INTO users 
  (name, password,email)
VALUES ('${name}', '${password}', '${email}') `)
  
return res.status(200)json{
    "userdata" : "{ DataSource }"
  }
} catch (error) 
res.status(500).json({messag : error.message})
})
  
const me = req.body
const { name, password, email } = me 

  
qpp.post('/'users, async(req,res)=>{
  try{  
  const userData = await myDataSource.query(`
  INSERT INTO users 
  (name, password,email)
VALUES ('${name}', '${password}', '${email}') `)
  }})
// 로그인

app.post('/'login,async(req,res)=>{
  try{}
})
// 삭제 
qpp.post('/'users, async(req,res)=>{
  try{  
  const userData = await myDataSource.query(`
  DELETE FROM users 
  (name, password,email)
VALUES ('${name}', '${password}', '${email}') `)
  }})


// 5. 서버 문열리면 알리는 대화명 
server.listen(8000, () => console.log(`Server is listening on 8000`))

myDataSource.initialize().then(() =>
{console.log("Data Source initialize")})


start()