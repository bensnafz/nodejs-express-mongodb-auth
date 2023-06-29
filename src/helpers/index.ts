import crypto from 'crypto';

const SECRET = 'SAINT-REST-API';

export const authentication = (salt: string | undefined, password: string): string => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
} 

export const random = () => crypto.randomBytes(128).toString('base64');