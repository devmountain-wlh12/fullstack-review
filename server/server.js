require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET
}))

massive(CONNECTION_STRING).then(db => {
  app.set(db, 'db')
  app.listen(SERVER_PORT, () =>
    console.log(`This server port is so ${SERVER_PORT}`)
  )
})
