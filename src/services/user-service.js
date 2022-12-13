import { Store } from '../store';
import { UserAction as Action } from '_actions';
import api, { createSession } from './api';

export const reducerKey = 'user';

export const login = async payload => {

   const data = await createSession(payload);

   if (data.status == 200) {
      Store.dispatch({
         type: Action.SET,
         payload: { email: payload.email, token: data.token },
      });
      return true;
   } else {
      return false;
   }
};

export const cadastrar = async payload => {
   try {
      const require = await api.post("/cadastro", payload);
      return { status: true, msg: "Cadastrado com sucesso" };
   } catch (error) {
      console.log(error)
      if (error.response) {
         return { status: error.response.data.status, msg: error.response.data.result }
      } else {
         return { status: false, msg: "Não foi possivel se conectar!" }
      }
   }

}

export const logout = () => {
   Store.dispatch({
      type: Action.LOGOUT,
   });
};
