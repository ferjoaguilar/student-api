import express, {Request, Response} from 'express'
import Student from '../services/student.services'

const router = express.Router()
const student = new Student()

router.get('/', async (req:Request, res:Response) => {
   try {
    const response = await student.getStudents()
    res.status(200).json({message: 'Students fetched successfully', data: response})
   } catch (error) {
    res.status(500).json({message: 'Something went wrong', error: error})
   }
})
export default router