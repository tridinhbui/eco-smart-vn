import axios from 'axios';
import { GET_POST_API } from '@/config/api';
import redis from '@/lib/redis';

export default async function handler(req, res) {
  const { body } = req;
  try {
    const { data, headers: returnedHeaders } = await axios.post(GET_POST_API, body);
    res.json(data);
  } catch (e) {
    console.log(e)
  }
}