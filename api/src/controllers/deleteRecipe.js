const { Recipe, Diet } = require("../db");

async function deleteRecipe(id) {
  let resultado = await Recipe.findByPk(id, {
    include: {
      model: Diet,
      attributes: ["title"],
      through: { attributes: [] },
    },
  });

  await resultado.destroy();
}
// jose fijate si funciona igual sin el include
module.exports = deleteRecipe;
