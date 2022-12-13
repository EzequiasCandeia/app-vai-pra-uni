import useSWR, { mutate } from "swr";
import api from "./api";

const baseUrl = "agendamento";

const fetcherGetAll = (params) => api.get(`${baseUrl}`, { params }).then(resp => resp.data);


const useGetAgendamentoAll = (params) => {
   const { data, error } = useSWR(`${api.defaults.baseURL}/${baseUrl}`,
      () => fetcherGetAll(params));

   return {
      isLoading: !data && !error,
      data: data,
      error
   }
}

const refreshAgendamentoAll = (params) => {
   mutate(`${api.defaults.baseURL}/${baseUrl}`);
}

const criarAgendamento = async (dados) => {
   const data = await api.post(baseUrl, dados);
   return { status: true };
}

export { criarAgendamento, useGetAgendamentoAll, refreshAgendamentoAll };