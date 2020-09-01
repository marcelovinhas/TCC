import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

// import history from '~/services/history';
import api from '../../../services/api';

import {
  forgotPasswordSuccess,
  forgotPasswordFailure,
  resetPasswordFailure,
  resetPasswordSuccess,
} from './actions';

export function* forgotPassword({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'esquecer', {
      email,
    });

    if (!email) {
      Alert.alert('email não existe', 'Esse e-mail não existe');
      return;
    }

    yield put(forgotPasswordSuccess(email));
    Alert.alert(
      'E-mail enviado!',
      'Verifique seu e-mail para alterar sua senha'
    );
  } catch (err) {
    Alert.alert('Falha no envio', 'Falha no envio do e-mail, tente novamente');
    yield put(forgotPasswordFailure());
  }
}

export function* resetPassword({ payload }) {
  try {
    const { email, token, senha, confirmarSenha } = payload;

    yield call(api.post, 'resetar', {
      email,
      token,
      senha,
      confirmarSenha,
    });

    yield put(resetPasswordSuccess(email, token, senha, confirmarSenha));

    // history.push('/');
    Alert.alert('Senha alterada!', 'Senha alterada! Faça login');
  } catch (err) {
    Alert.alert('Falha', 'Falha, verifique seus dados!');

    yield put(resetPasswordFailure());
  }
}

export default all([
  takeLatest('@password/FORGOT_PASSWORD_REQUEST', forgotPassword),
  takeLatest('@password/RESET_PASSWORD_REQUEST', resetPassword),
]);
