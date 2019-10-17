/**
 *
 * entrez la commande suivante:
 * npm install --save express express-session body-parser morgan cors
 * puis node server.js
 * exemple complet à l'adresse https://github.com/Musinux/first-vue-app
 */
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const app = express()

// ces lignes (cors) sont importantes pour les sessions dans la version de développement
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}))

app.use(session({
  secret: 'blablabla', // changez cette valeur
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ne changez que si vous avez activé le https
}))
app.use(morgan('dev'))
app.use(bodyParser.json())

const path = require('path')
app.use(express.static(path.join(__dirname, '/dist')))

const users = [{
  username: 'admin',
  password: 'admin'
}]

// USER LOGIN INTO SERVER & RESPONSE

app.post('/api/login', (req, res) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)
  if (!req.session.userId) {
    const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
    if (!user) {
      // USER NOT FOUND
      res.json({
        message: 'error users not found'
      })
      // alert('CONNECTION ERROR')
    } else {
      // USER FOUND => CONNECT USER
      req.session.userId = 1000 // connect the user, and change the id
      res.json({
        message: 'connected'
      })
    }
  } else {
    res.json({
      message: 'already connected'
    })
    // alert('ALREADY CONNECTED')
  }
})

// ADD NEW USER INTO SERVER
app.post('/api/newUser', (req, res) => {
  const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
  if (!user) {
    users.push({
      username: req.body.login,
      password: req.body.password
    })
    res.json({
      message: 'user created succesfull'
    })
  } else {
    res.json({
      message: 'user already exist'
    })
  }
})

app.post('/api/logout', (req, res) => {
  if (!req.session.userId) {
    // res.status(401)
    res.json({
      message: 'you are already disconnected'
    })
  } else {
    req.session.userId = 0
    res.json({
      message: 'disconnected'
    })
  }
})

var A11 = 0
var A12 = 0
var A21 = 0
var A22 = 0
var A31 = 0
var A32 = 0
var A41 = 0
var A42 = 0
var A51 = 0
var A52 = 0

app.post('/api/addStats', (req, res) => {
  // const user = users.find(u => u.username === req.body.login && u.password === req.body.password)
  if (req.body.ans === 11) {
    A11 = A11 + 1
    res.json({ message1: A11, message2: A12 }
    )
  }
  if (req.body.ans === 12) {
    A12 = A12 + 1
    res.json({ message1: A11, message2: A12 }
    )
  }

  if (req.body.ans === 21) {
    A21 = A21 + 1
    res.json({ message1: A21, message2: A22 }
    )
  }
  if (req.body.ans === 22) {
    A22 = A22 + 1
    res.json({ message1: A21, message2: A22 }
    )
  }
  if (req.body.ans === 31) {
    A31 = A31 + 1
    res.json({ message1: A31, message2: A32 }
    )
  }
  if (req.body.ans === 32) {
    A32 = A32 + 1
    res.json({ message1: A31, message2: A32 }
    )
  }
  if (req.body.ans === 41) {
    A41 = A41 + 1
    res.json({ message1: A41, message2: A42 }
    )
  }
  if (req.body.ans === 42) {
    A42 = A42 + 1
    res.json({ message1: A41, message2: A42 }
    )
  }
  if (req.body.ans === 51) {
    A51 = A51 + 1
    res.json({ message1: A51, message2: A52 }
    )
  }
  if (req.body.ans === 52) {
    A52 = A52 + 1
    res.json({ message1: A51, message2: A52 }
    )
  }
})

app.get('/api/admin', (req, res) => {
  if (!req.session.userId || req.session.isAdmin === false) {
    res.status(401)
    res.json({ message: 'Unauthorized' })
    return
  }

  res.json({
    message: 'congrats, you are connected'
  })
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
