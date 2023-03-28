import axios from 'axios';
import { REFRESH_TOKEN_API } from '@/config/api';
import redis from '@/lib/redis';

export default async function handler(req, res) {
  const { method, headers, body } = req;
  try {
    if (headers.cookie) {
      const accessToken = await redis.get('accessToken');
      if (!accessToken) {
        const { data, headers: returnedHeaders } = await axios.post(REFRESH_TOKEN_API, body, {
          headers: {
            Cookie: headers.cookie
          }
        });
        if (data.statusCode == 200) {
          redis.set('accessToken', data.accessToken, {
            ex: 1800,
          });
        }
        res.json(data);
      } else {
        res.json({ message: 'accessToken is still valid', statusCode: 200 });
      }
    } else {
      res.json({ message: 'refreshToken is expired', statusCode: 403 });
    }
  } catch (e) {
    console.log(e)
  }
}