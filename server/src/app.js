import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import{createRoles} from './libs/InitialDefault'
import scheduleRoutes from './routes/schedule.routes.js'
import authRoutes  from './routes/auth.routes'
import userRoutes  from './routes/users.routes'
const app = express()


createRoles();

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

export default app;