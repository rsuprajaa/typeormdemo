import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm'
import authRoutes from './routes/auth'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3000',
		optionsSuccessStatus: 200,
	})
)

app.use('/api/auth', authRoutes)

const port = process.env.PORT || 5000
createConnection()
	.then(async (_) => {
		console.log('Database connected')
		app.listen(port, () => {
			console.log(`server up on port ${port}`)
		})
	})
	.catch((error) => console.log(error))
