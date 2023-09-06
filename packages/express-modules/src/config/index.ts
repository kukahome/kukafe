import { KukaEnv } from '@kuka/fe-utils'
import type { KukaEnvType } from '@kuka/fe-utils'

import dev from './dev.config'
import fat from './fat.config'
import uat from './uat.config'
import pro from './pro.config'

export function getCurrentEnvType(): KukaEnvType {
  const env = process.env.ENV?.toLowerCase()
  if (env === 'dev' || env === 'fat' || env === 'uat' || env === 'pro')
    return env
  return 'fat'
}

export function getCurrentConfig(currentEnv: KukaEnv) {
  if (currentEnv === KukaEnv.pro)
    return pro
  else if (currentEnv === KukaEnv.uat)
    return uat
  else if (currentEnv === KukaEnv.fat)
    return fat
  else if (currentEnv === KukaEnv.dev)
    return dev
  else return dev
}
