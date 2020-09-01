/* eslint-disable no-param-reassign */
import produce from 'immer';

const InitalState = {
  email: null,
  token: null,
  senha: null,
  confirmarSenha: null,
  loading: false,
};

export default function password(state = InitalState, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@password/FORGOT_PASSWORD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@password/FORGOT_PASSWORD_SUCCESS': {
        draft.email = action.payload.email;
        draft.loading = false;
        break;
      }
      case '@password/FORGOT_PASSWORD_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@password/RESET_PASSWORD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@password/RESET_PASSWORD_SUCCESS': {
        draft.email = action.payload.email;
        draft.token = action.payload.token;
        draft.senha = action.payload.senha;
        draft.confirmarSenha = action.payload.confirmarSenha;
        draft.loading = false;
        break;
      }
      case '@password/RESET_PASSWORD_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
