import express from 'express';
import userData from '../data/users.json' assert { type: 'json' };
import jwt from 'jsonwebtoken';
import auth0 from 'auth0-js';

const router = express.Router();
var webAuth = new auth0.WebAuth({
  domain:       'dev-ve8rhfzib1f1o1gu.eu.auth0.com',
  clientID:     'tBWipe8DVFSSiIAKZQ22Lay5blJ6dF01'
});


router.post('/', (req, res) => {
const secretKey = process.env.AUTH_SECRET_KEY || 'my-secret-key';
  const { username, password } = req.body;
  const { users } = userData;
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  const token = jwt.sign({ userId: user.id }, secretKey);
  res.status(200).json({ message: 'Successfully logged in!', token });
});

export default router;
