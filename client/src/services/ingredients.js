import api from './apiConfig'

export const getAllIngredients = async () => {
  const resp = await api.get('/ingredients')
  return resp.data
}