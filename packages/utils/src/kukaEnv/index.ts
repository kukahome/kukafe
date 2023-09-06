export type KukaEnvType = 'dev' | 'fat' | 'uat' | 'pro'

export enum KukaEnv {
  dev = 'dev',
  fat = 'fat',
  uat = 'uat',
  pro = 'pro',
}

export interface envObj {
  dev?: string[]
  fat?: string[]
  uat?: string[]
  pro?: string[]
}

export function getKukaEnvByDomain(obj: envObj): KukaEnv {
  // 此函数只能运行在浏览器环境，如果不是浏览器环境抛出错误
  if (typeof window === 'undefined')
    throw new Error('getKukaEnv() must be run in browser environment')

  const domain = window.location.hostname

  if (obj.dev?.includes(domain))
    return KukaEnv.dev
  else if (obj.fat?.includes(domain))
    return KukaEnv.fat
  else if (obj.uat?.includes(domain))
    return KukaEnv.uat
  else if (obj.pro?.includes(domain))
    return KukaEnv.pro
  else
    return KukaEnv.fat
}

/**
 * api获取当前环境
 * @param endpoint api地址 默认为 /kuka-runtime-env
 * @returns KukaEnv
 */
export async function fetchKukaRuntimeEnv(endpoint = '/kuka-runtime-env'): Promise<KukaEnv | undefined> {
  const response = await fetch(endpoint)
  if (!response.ok)
    throw new Error(response.statusText)

  const result = (await response.json()) as { env: KukaEnv }
  if (!result.env)
    throw new Error('runtime env not found')
  if (!Object.values(KukaEnv).includes(result.env))
    throw new Error('invalid runtime env')
  return result.env
}
