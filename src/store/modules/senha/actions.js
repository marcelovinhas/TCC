export function forgotPasswordRequest(email) {
  return {
    type: '@password/FORGOT_PASSWORD_REQUEST',
    payload: { email },
  };
}

export function forgotPasswordSuccess(email) {
  return {
    type: '@password/FORGOT_PASSWORD_SUCCESS',
    payload: { email },
  };
}

export function forgotPasswordFailure() {
  return {
    type: '@password/FORGOT_PASSWORD_FAILURE',
  };
}

export function resetPasswordRequest(email, token, senha, confirmarSenha) {
  return {
    type: '@password/RESET_PASSWORD_REQUEST',
    payload: { email, token, senha, confirmarSenha },
  };
}

export function resetPasswordSuccess(email, token, senha, confirmarSenha) {
  return {
    type: '@password/RESET_PASSWORD_SUCCESS',
    payload: { email, token, senha, confirmarSenha },
  };
}

export function resetPasswordFailure() {
  return {
    type: '@password/RESET_PASSWORD_FAILURE',
  };
}
