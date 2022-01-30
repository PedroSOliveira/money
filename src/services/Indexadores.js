// import md5 from 'md5';
import axios from 'axios';

const BASE_URL = 'https://oliveira-rondelli-api.herokuapp.com/api/planogestor/indexadores';


export const ServiceApiIndexadores = {

    createIndexador: async (nome, simbolo) => {
        try {
            const response = await axios.post(`${BASE_URL}`, { nome, simbolo });
           
            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getAllIndexadores: async (size, page, nome) => {
        try {
            const response = await axios.get(`${BASE_URL}`, {
                params: { page, size, nome }
            });

            return response;
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

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    },


};