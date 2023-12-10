import express, {Express} from 'express'
import dotenv from 'dotenv'

import handleRoutes from './routes'

dotenv.config()
const app:Express = express()

app.set('PORT', process.env.PORT || 3000)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

handleRoutes(app)

app.listen(app.get("PORT"), () => {
  console.log(`Server running on port ${app.get("PORT")}`)
})
