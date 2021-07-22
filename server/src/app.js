import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import{createRoles} from './libs/InitialDefault'
import{createDay} from './libs/InitialDefaultDays'
import scheduleRoutes from './routes/schedule.routes.js'
import hourRoutes from './routes/HourAvaible.routes'
import dayRoutes from './routes/DayAvailable.routes'
import assistantRoutes from './routes/Assistant.routes'
import reportRoutes from './routes/report.routes'
import authRoutes  from './routes/auth.routes'
import userRoutes  from './routes/users.routes'
const app = express()


createRoles();
createDay();

app.set('pkg', pkg);
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
       author: app.get('pkg').author,
       description:app.get('pkg').description,
       version:app.get('pkg').version,
    })
})

app.use('/api/schedule', scheduleRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/hour', hourRoutes)
app.use('/api/assistant', assistantRoutes)
app.use('/api/report', reportRoutes)
app.use('/api/day', dayRoutes)

export default app;