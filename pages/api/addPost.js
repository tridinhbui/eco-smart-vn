import axios from 'axios';
import { ADD_POST_API } from '@/config/api';
import redis from '@/lib/redis';

export default async function handler(req, res) {
  const { method, headers, body } = req;
  try {
    const accessToken = await redis.get('accessToken');
    const { data, headers: returnedHeaders } = await axios.post(ADD_POST_API, body, {headers: {Authorization: `Bearer ${accessToken}`}});
    res.json({});
  } catch (e) {
    console.log(e)
  }
}