import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import scheduleRoutes from './routes/schedule.routes.js'
const app = express()

app.set('pkg', pkg)

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
       author: app.get('pkg').author,
       description:app.get('pkg').description,
       version:app.get('pkg').version,
    })
})

app.use('/schedule', scheduleRoutes)

export default app;