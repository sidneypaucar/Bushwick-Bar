import api from './apiConfig';

export const signinUser = async (signinData) => {
  const resp = await api.post('/auth/signin', { authentication: signinData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const signupUser = async (signupData) => {
  const resp = await api.post('/users/', { user: signupData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return null
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null
}