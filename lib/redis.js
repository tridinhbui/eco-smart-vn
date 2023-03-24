import Redis from 'ioredis';
import { REDIS_URL } from '@/config/account';
 
const redis = new Redis(REDIS_URL);
 
export default redis;