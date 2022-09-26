import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://quang-blog.herokuapp.com',
});

export default axiosClient;
