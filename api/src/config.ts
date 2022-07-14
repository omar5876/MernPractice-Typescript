import dotenv from 'dotenv'
dotenv.config()
let {HOST, DB_NAME} =process.env
export default {
    HOST,
    DB_NAME
}