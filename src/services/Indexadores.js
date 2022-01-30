// import md5 from 'md5';
import axios from 'axios';

const BASE_URL = 'https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores';

// const PUBLIC_KEY = '';
// const PRIVATE_KEY = '';
// const time = Number(new Date());
// const hash = md5(time + PRIVATE_KEY + PUBLIC_KEY);

export const ServiceApiIndexadores = {

    createIndexador: async (nome, simbolo) => {
        try {
            const response = await axios.post(`${BASE_URL}`, { nome, simbolo });

            console.log(response);
            return response;

        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllIndexadores: async (limit, offset, title) => {
        try {
            //   let url = BASE_URL;
            //   if(title) url += `?title=${title}`;

            const response = await axios.get(`${BASE_URL}?page=1&size=7`, {
                // params: { ts: time, apikey: PUBLIC_KEY, hash, limit, offset }
            });

            const indexadoresData = response.data;
            console.log("indexadoresData", indexadoresData);

            return indexadoresData;

        } catch (error) {
            throw new Error(error.message);
        }
    },

    getIndexador: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/${id}`);
            const indexador = response.data.data;

            return indexador;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    editIndexador: async (id, simbolo, nome) => {
        try {
            const response = await axios.patch(`${BASE_URL}/${id}`, { nome, simbolo });

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteIndexador: async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/${id}`);
            console.log(response);
            return response;

        } catch (error) {
            throw new Error(error.message);
        }
    },


};