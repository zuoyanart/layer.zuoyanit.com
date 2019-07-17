const isDebug = (process.env.OBJ_ENV === 'pro');
export default {
  domain: isDebug ? 'https://grootapi.zuoyanit.com' : 'https://grootapi.zuoyanit.com',
  apiUrl: isDebug ? 'https://grootapi.zuoyanit.com/api1' : 'http://192.168.3.161:8464/api1',
  uploadUrl: isDebug ? 'https://grootapi.zuoyanit.com/api1' : 'http://192.168.3.161:8464/api1',
  userkey: {
    key: '9d5f6afa47254f149809256ee94568xa',
    secret: 'cpQpCfKjUkZDU6VpHPYSvxSRhJHtc5'
  }
};