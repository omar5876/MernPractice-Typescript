import mongoose from 'mongoose'
import config from './config'

(async() =>{
    try {
        
        const db = await mongoose.connect(`mongodb://${config.HOST}/${config.DB_NAME}`)
        console.log('db connected to: ', db.connection.name);
    } catch (error) {
        console.error(error)
    }
    }
)()