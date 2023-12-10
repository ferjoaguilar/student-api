import express, {NextFunction, Request, Response} from 'express'
import Student from '../services/student.services'
import { handleValidator } from '../middlewares/validation.handle'
import { studentSchema } from '../schema/student.schema'

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

router.post('/', handleValidator(studentSchema), async (req:Request, res:Response) => {
    try {
        const response = await student.createStudent(req.body)
        res.status(201).json({message: 'Student created successfully', data: response})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong', error: error})
    }
})
export default router