const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getRecipesNameRouter = require("./getRecipesName");
const postRecipesRouter = require("./postRecipes");
const getRecipesIdRouter = require("./getRecipesId");
const getDietsRouter = require("./getDiets");
const deleteRecipeRouter = require("./deleteRecipe");
const putRecipeRouter = require("./putRecipe");

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes/update", putRecipeRouter);
router.use("/recipes", getRecipesNameRouter);
router.use("/recipes", postRecipesRouter);
router.use("/recipes", getRecipesIdRouter);
router.use("/diets", getDietsRouter);
router.use("/recipes", deleteRecipeRouter);

module.exports = router;
