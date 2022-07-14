import app from './app'
import './db'
const port = process.env.PORT


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
