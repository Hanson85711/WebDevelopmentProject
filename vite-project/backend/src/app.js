import express from 'express'
import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json())
app.use(cors())
postsRoutes(app)
userRoutes(app)
app.get('/', (req, res) => {
  res.send('My new hot changes on express!')
})
export { app }
