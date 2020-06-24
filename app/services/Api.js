import { apiConfig } from './Utils';
import Secrets from 'react-native-config';

const api = apiConfig(Secrets.BASE_URL);

const auth = () => {
    const getRestaurantList = (data) => api.get(Secrets.GET_NEWS, data);
    return { getRestaurantList };
};

export default { auth, };
