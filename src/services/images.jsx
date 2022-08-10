import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/photos';

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default getAll;