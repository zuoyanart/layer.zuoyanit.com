const isDebug = (process.env.OBJ_ENV === 'pro');
export default {
  apiUrl: isDebug ? 'https://api.xxxx.com/api1' : 'http://192.168.3.161:8464/admin',
  uploadUrl: isDebug ? 'https://api.xxxx.com/api1' : 'http://192.168.3.161:8464/admin',
  userkey: {
    key: '9d5f6afa47254f149809256ee94568xa',
    secret: 'cpQpCfKjUkZDU6VpHPYSvxSRhJHtc5'
  }
};