import axios from 'axios';
import { GET_POST_API } from '@/config/api';
import redis from '@/lib/redis';

export default async function handler(req, res) {
  const { method, headers, body } = req;
  try {
    const accessToken = await redis.get('accessToken');
    const { data, headers: returnedHeaders } = await axios.post(GET_POST_API, body, {headers: {Authorization: `Bearer ${accessToken}`}});
    res.json(data);
  } catch (e) {
    console.log(e)
  }
}