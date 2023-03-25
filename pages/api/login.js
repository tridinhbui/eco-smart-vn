
import axios from 'axios';
import { ADMIN_LOGIN_API } from '@/config/api';
import cookie from 'cookie'
import redis from '@/lib/redis';

export default async function handler(req, res) {
  const { method, headers, body } = req;
  try {
    const { data, headers: returnedHeaders } = await axios.post(ADMIN_LOGIN_API, body, { headers });
    if (data.statusCode == 200) {
      //redis.set('accessToken',data.accessToken,'EX',500);
      const cookieParse = cookie.parse(returnedHeaders['set-cookie'][0]);
      res.setHeader('set-cookie', cookie.serialize('refreshToken', cookieParse.refreshToken, {
        httpOnly: true,
        maxAge: parseInt(cookieParse['Max-Age']),
        path: cookieParse.Path,
      }));
      redis.set('accessToken',data.accessToken,'EX',1800);
    }
    res.json(data);
  } catch (e) {
    console.log(e);
  }
}