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

    // if (!email) {
    //   Alert.alert('Email não existe', 'Esse e-mail não existe');
    //   return;
    // }

    yield put(forgotPasswordSuccess(email));
    Alert.alert(
      'Email enviado!',
      'Acesse seu email e use o código enviado para redefinir sua senha.'
    );
  } catch (err) {
    Alert.alert(
      'Verifique o email digitado!',
      'Não há conta cadastrada com esse email.'
    );
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
    Alert.alert('Senha alterada!', 'Volte a tela de login e acesse sua conta');
  } catch (err) {
    Alert.alert(
      'Erro ao atualizar senha!',
      'Verifique seu email, código e se as senhas coincidem.'
    );

    yield put(resetPasswordFailure());
  }
}

export default all([
  takeLatest('@password/FORGOT_PASSWORD_REQUEST', forgotPassword),
  takeLatest('@password/RESET_PASSWORD_REQUEST', resetPassword),
]);
