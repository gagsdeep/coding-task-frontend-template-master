const axios = require('axios');
var { API_URL } = require('../config');

module.exports = {
    getKeywordsForCategory: (category) => {
        const url = `${API_URL}${category}`
        return axios.get(url);

    }
}