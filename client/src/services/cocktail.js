import api from './apiConfig'

export const getAllCocktails = async () => {
  const resp = await api.get('/cocktails')
  return resp.data
}

export const postCocktail = async (cocktailData) => {
  const resp = await api.post('/cocktails', { cocktail: cocktailData });
  return resp.data;
}