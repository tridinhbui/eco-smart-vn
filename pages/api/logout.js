
import axios from 'axios';
import { ADMIN_LOGIN_API } from '@/config/api';
import cookie from 'cookie'
import redis from '@/lib/redis';

export default async function handler(req, res) {
  const { method, headers, body } = req;
  try {
    res.setHeader('set-cookie', cookie.serialize('refreshToken', "", {
      httpOnly: true,
      maxAge: 0,
      path: "/",
    }));
    res.json({ message: 'Logout successfully', statusCode:200});
  } catch (e) {
    console.log(e);
  }
}