export function updateProfileRequest(data) {
  return {
    type: '@usuario/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile) {
  return {
    type: '@usuario/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@usuario/UPDATE_PROFILE_FAILURE',
  };
}
