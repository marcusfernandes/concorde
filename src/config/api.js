import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.whoisxmlapi.com/whoisserver',
});

api.interceptors.request.use(config => {
  config.params = {
    apiKey: 'at_FkQcvTPTU0az7Xbbv8YLCs1GqFldE',
    outputFormat: 'JSON',
    ...config.params,
  };
  return config;
});

export default api;
