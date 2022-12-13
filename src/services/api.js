import { CommonActions, useNavigation } from '@react-navigation/native';
import axios from 'react-native-axios';
import { UserService } from '_services';
import { Store } from '../store';

const api = axios.create({
   // baseURL: 'http://systemsmart.com.br:3001/api',
   baseURL: 'http://10.0.2.2:3009/api',
   headers: {
      'Content-Type': 'application/json',
   },
});

api.interceptors.request.use(function (config) {
   config.headers.Authorization = Store.getState().user.token;
   return config;
});

const createSession = async (dados) => {
   try {
      const retorno = (await axios.post('http://10.0.2.2:3009/api/login', {}, { auth: { username: dados.email, password: dados.password } }));
      return { status: retorno.status, token: retorno.data.token };
   } catch (e) {
      return { status: e?.status, data: e?.data };
   }
}

export default api;
export { createSession }