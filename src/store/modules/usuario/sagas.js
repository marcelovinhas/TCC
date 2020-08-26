import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { nome, email, ...rest } = payload.data;

    const profile = {
      nome,
      email,
      ...(rest.senhaAntiga ? rest : {}),
    };

    const response = yield call(api.put, 'usuarios', profile);

    Alert.alert('Sucesso!', 'Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha na atualização',
      'Houve um erro na atualização do perfil, verifique seus dados'
    );
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest('@usuario/UPDATE_PROFILE_REQUEST', updateProfile),
]);
