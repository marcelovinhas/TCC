import { Alert } from 'react-native';
import { takeLatest, call, put, all, delay } from 'redux-saga/effects';

// import history from '~/services/history';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

function* signIn({ payload }) {
  try {
    const { email, senha } = payload;

    const response = yield call(api.post, 'login', {
      email,
      senha,
    });

    const { token, usuario } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(1000);

    yield put(signInSuccess(token, usuario));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert(
      'Erro no login/senha.',
      'Por favor confira seu e-mail e senha!'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { nome, email, senha, confirmarSenha } = payload;

    yield call(api.post, 'usuarios', {
      nome,
      email,
      senha,
      confirmarSenha,
    });

    Alert.alert(
      'Cadastro realizado.',
      'Volte a tela anterior e acesse sua conta',
      [
        {
          text: 'login',
        },
      ]
    );

    // history.push('/');
  } catch (err) {
    Alert.alert('Falha no registro', 'Por favor confira seus dados!');

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
