import type { Express } from 'express'
import express from 'express'

const router = express.Router()

export function setupTemplateModule(app: Express) {
  app.use(router)
}
