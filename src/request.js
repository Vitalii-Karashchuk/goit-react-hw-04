import axios from 'axios';
const clientId = 'wMZ5hyfHAryILdLQJ2unnbQmANilEX93SoCGGc5EpAk';
export const fetchImg = async (newSearch) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        //     headers: {
        //     Authorization: `Client-ID ${clientId}`
        // },
            params: {
                client_id: clientId,
                page: 1,
                query: newSearch,
                per_page: 15,
                orientation: 'landscape'
            }
        })
    return response.data.results;
}