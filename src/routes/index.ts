import express from 'express'
import studentRoutes from './student.routes'


const handleRoutes = (app:express.Application) => {
    const router = express.Router()
    app.use('/api/v1', router)

    router.use('/students', studentRoutes)
}

export default handleRoutes