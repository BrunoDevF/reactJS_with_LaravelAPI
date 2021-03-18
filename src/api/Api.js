const ApiBase = 'http://127.0.0.1:8000/api';

const API = {
    list:async () => {
        const res = await fetch(ApiBase + '/list');
        const json = await res.json();

        return json;
    },
    upload: async (file) => {
        //Cria uma instancia de Form
        const data = new FormData();
        //adiciona um par de chaves novo ao form
        data.append('files', file);
        
        await fetch(ApiBase + '/upload', {
            method: 'POST',
            body: data
        });
    }
}

export default API;