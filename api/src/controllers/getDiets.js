const axios = require("axios");
const { API_KEY } = process.env;
//require("dotenv").config();
const { Diet } = require("../db");

async function allDiets() {
  // const dietsApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&addRecipeInformation=true&apiKey=${API_KEY}`);
  const dietsApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=1000000000&addRecipeInformation=true&apiKey=${API_KEY}`);
  const types = dietsApi.data.results.map(e => e.diets) 
  const typesDiets = types.flat(); //Mapea nuevamente el resultado que es un array de arrays en un solo array con el metodo flatMap
  let dietas = new Set(typesDiets);
  let buscar = await Diet.findAll();

  if (buscar.length === 0) {
    for (const dieta of dietas) {
      let create = await Diet.create({ title: dieta });
    }

    let resultado = await Diet.findAll();
    return resultado;
  }
  return buscar;
}

module.exports = allDiets;