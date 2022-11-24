export const Api = {
    baseUrl: 'http://localhost:3000/',
    // baseUrl: 'https://server-crud-com-a-stack-mern.onrender.com/',

    itens: {
        endpoint: function() {
            return Api.baseUrl + 'itens';
        },
        readAll: function() {
            return this.endpoint() + '/';
        },
        create: function() {
            return this.endpoint() + '/';
        }
    },

    // Montar as requisições
    buildApiGetRequest: function (url) {
        return fetch(url, {
            method: 'GET'
        })
    },

    //POST
    buildApiPostRequest: function (url, body) {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: new Headers({
                "Content-type": "application/json"
            }),
        })
    }
}