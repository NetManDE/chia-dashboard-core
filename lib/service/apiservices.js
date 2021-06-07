const axios = require('axios');
const config = require('./config');

class APIServices {
  constructor() {
    this.client = axios.create({ baseURL: 'http://127.0.0.1/chia-api' });
  }

  async getStats() {
    return this.doApiCall('stats');
  }
  
 async doApiCall(url, params = {}) {
    const { data } = await this.client.get(url, { params });

    return data;
  }
}
module.exports = new APIServices();
