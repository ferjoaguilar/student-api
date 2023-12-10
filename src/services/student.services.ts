import database from '../utils/database.utils'

class Student{
    collection: string

    constructor(){
        this.collection = 'students'
    }
    async getStudents(){
        try {
            const db = await database()
            const students = await db!.collection(this.collection).find({}).toArray()
            return students
        } catch (error) {
            throw new Error(error as string)
        }
    }
}

export default Student