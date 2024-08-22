import Recipe from '../models/recipe.model.js';  // Adjust the import path according to your project structure

//create recipe
export const createRecipe = async (req,res) => {
try{
    const{title, description, ingridents, instructions, servings, cookingtime, preptime, cuisine } = req.body;

    //Create new recipe
    const recipe = await Recipe.create({
        title,
        description,
        ingridents,  
        instructions,
        servings,
        cookingtime,
        preptime,
        cuisine,
    });   

      // Check if the recipe was created
      if (!recipe) {
        return res.status(400).json({
          success: false,
          message: "Failed to create the recipe",
        });
      } else {
        return res.status(201).json({
          success: true,
          message: "Recipe created successfully",
          data: recipe,
        });
      }
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
      });
    }
  };
  
 

  //search recipe using cuisine or title
  export const getRecipes = async (req,res) => {
    try{
      const {cuisine, title} = req.query;
      let query = {};

      if(cuisine){
        query.cuisine = cuisine;
      }

      if(title){
        query.title = title;
      }

      const recipes = await Recipe.find(query);

      if(!recipes){
        return res.status(404).json({
          success: false,
          message: "Recipe not found",
        });
      }else{
        return res.status(200).json({
          success: true,
          data: recipes,
        });
      }
    }catch(err){
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: err.message,
      });
    }
  }
  

  //Read recipe
  export const getRecipebyId = async (req,res) => {
    try{
      const {id} = req.params;

      const getrecipe = await Recipe.findById(id);
      if(!getrecipe){
        return res.status(400).json({
          success: false,
          message: "Recipe not found"
        });
      } else{
        return res.status(200).json({
          success: true,
          data: getrecipe
        });
      }
    }catch(err){
      return res.status(500).json({
        success: false,
        error: err.message
      });
    }
  }

  //find multiple recipe that matches the given criteria
  export const updateRecipe = async (req,res) => {
    try{
      const {id} = req.params;
      const {title, description, ingridents, instructions, servings, cookingtime, preptime, cuisine} = req.body;

      const updaterecipe = await Recipe.findByIdAndUpdate(id, {
        title,
        description,
        ingridents,
        instructions,
        servings,
        cookingtime,
        preptime,
        cuisine,
      },
      { new: true, runValidators: true } // Return the new updated recipe document and run schema validators
    );

      if(!updaterecipe){
        return res.status(404)
          .json({
            success: false,
            message: "Recipe not found",
          });
      }else{
         return res.status(200).json({
          success: true,
          message: "Recipe updated successfully",
          data: updaterecipe,
         })

      }
    }catch(err){
        return res.status(500).json({
          success: false,
          message: "Inernal Server Error",
          error: err.message,
        })
    }
  } 

  //delete recipe 
  export const deleteRecipe = async(req, res) => {
    try{
      const {id} = req.params;
      const deleterecipe = await Recipe.findByIdAndDelete(id);

      if(!deleterecipe){
        return res.
        status(404).json({
          success: false,
          message: "Recipe not found",
        });
      }else{
        return res.status(200).json({
          success: true,
          message: "Recipe deleted successfully",
        });
      }
    }catch(err){
        return res.status(500),json({
          success: false,
          message: "Internal Server Error",
          error: err.message,
        });
    }
  };
