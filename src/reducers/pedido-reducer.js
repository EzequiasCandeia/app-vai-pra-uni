import {PedidoAction as Action} from '_actions';
const initialState = [{id: 1, nome: 'Pedido 1'}, {id: 2, nome: 'Pedido 2'}];

const pedidoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action.ADD:
      return[...state, ...action.payload];
    case Action.CLEAR:
      return [...initialState]
    default:
      return state;
  }
};

export default pedidoReducer;
