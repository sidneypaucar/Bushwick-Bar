import api from './apiConfig'

export const getAllCocktails = async () => {
  const resp = await api.get('/cocktails')
  return resp.data
}