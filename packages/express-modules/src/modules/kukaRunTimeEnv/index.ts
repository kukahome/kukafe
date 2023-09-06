import type { Express } from 'express'
import express from 'express'
import { getCurrentEnvType } from '@/config'

const router = express.Router()

router.get('/kuka-runtime-env', (req, res) => {
  const env = getCurrentEnvType()
  res.status(200).send({ env })
})

export function setupKukaRuntimeEnvModule(app: Express) {
  app.use(router)
}
