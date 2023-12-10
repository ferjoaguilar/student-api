import {MongoClient} from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGODB_URI as string;

const client = new MongoClient(uri) 

const database = async () => {
    try {
        await client.connect()
        const db = client.db(process.env.MONGODB_DBNAME)
        return db
    }
    catch (error) {
        console.log(error)
    }
}

export default database