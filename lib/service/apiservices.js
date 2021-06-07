const axios = require('axios');
const config = require('config');

class APIServices {
  constructor() {
    this.client = axios.create({ baseURL: config.ChiaAPIURL });
  }

  async getStats() {
    return this.doApiCall('test.php');
  }
  
 async doApiCall(url, params = {}) {
    const { data } = await this.client.get(url, { params });

    return data;
  }
}
module.exports = new APIServices();
