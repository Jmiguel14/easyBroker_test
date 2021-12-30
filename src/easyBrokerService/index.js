const axios = require("axios");

const instance = axios.create({
  baseURL: "https://api.stagingeb.com/v1/properties?page=1&limit=20",
  headers: {
    accept: "application/json",
    "X-Authorization": "l7u502p8v46ba3ppgvj5y2aad50lb9",
  },
});

class EasyBrokerService {
  async getProperties() {
    try {
      const response = await instance.get();
      return response.data.content.map((property) => property.title);
    } catch (e) {
      console.log("something went wrong", e);
    }
  }
}

module.exports = EasyBrokerService