import { Redis } from '@upstash/redis'
import { REDIS_URL, PASSWORD } from '@/config/account';

const redis = new Redis({
  url: REDIS_URL,
  token: PASSWORD,
})
 
export default redis;