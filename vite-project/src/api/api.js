export const Api = {
    baseUrl: 'http://localhost:3000/',
    // baseUrl: 'https://server-crud-com-a-stack-mern.onrender.com',

    itens: {
        endpoint: () => {
            return Api.baseUrl + 'itens';
        },
        readAll: () => {
            return this.endpoint() = '/';
        },
    },

    // Montar as requisições
    buildApiGetRequest: function (url) {
        return fetch(url, {
            method: 'GET'
        })
    }
}