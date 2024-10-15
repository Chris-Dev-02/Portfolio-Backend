import { config } from 'dotenv';

config();

export const PORT = process.env.PORT || 3000;
export const SECRET_KEY = process.env.SECRET_KEY || 'portfolio_secret_key';
export const DB_HOST = process.env.DB_HOST || '';
export const DB_NAME = process.env.DB_NAME || '';
export const MY_EMAIL = process.env.MY_EMAIL || '';
export const MY_EMAIL_PASWORD = process.env.MY_EMAIL_PASWORD || '';
//export const ACCESS_TOKEN_EXPIRY = process.env.ACCESS_TOKEN_EXPIRY || '';
//export const REFRESH_TOKEN_EXPIRY = process.env.REFRESH_TOKEN_EXPIRY || '';
