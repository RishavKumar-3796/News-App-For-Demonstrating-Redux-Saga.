import { apiConfig } from './Utils';
import Secrets from 'react-native-config';

const api = apiConfig(Secrets.BASE_URL);

const auth = () => {
    const getNewsList = (data) => api.get(Secrets.GET_NEWS, data);
    return { getNewsList };
};

export default { auth, };
