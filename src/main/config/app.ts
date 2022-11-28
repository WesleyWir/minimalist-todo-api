import { setupMiddlewares } from '@/main/config/middlewares'
import { setupRoutes } from '@/main/config/routes'
import express from 'express'

const app = express()
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
setupMiddlewares(app)
setupRoutes(app)
export default app