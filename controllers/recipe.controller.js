import Recipe from '../models/Recipe';  // Adjust the import path according to your project structure

//create recipe
export const createRecipe = async (req,res) => {
try{
    const{title, description, ingridents, instructions, servings, cookingtime, preptime, Cuisine } = req.body;

    //Create new recipe
    const recipe = await Recipe.create({
        title,
        description,
        ingridents,  
        instructions,
        servings,
        cookingtime,
        preptime,
        Cuisine,
    });
m
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
  // export const updateRecipe = async (req,res) => {
  //   try{
  //     const {id} = req.params;
  //     const {title, description, ingridents, instructions, servings, cookingtime, preptime, Cusine} = req.body;

  //     const 
  //   }catch{

  //   }
  // } 

  export const updateRecipe = async (req, res) => {
      try {
          const { id } = req.params;  // Get the recipe ID from the route parameters
          const {
              title,
              description,
              ingredients,
              instructions,
              servings,
              cookingtime,
              preptime,
              Cuisine,
          } = req.body;  // Get the updated recipe details from the request body
  
          // Find the recipe by ID and update it with the new data
          const recipe = await Recipe.findByIdAndUpdate(
              id,
              {
                  title,
                  description,
                  ingredients,
                  instructions,
                  servings,
                  cookingtime,
                  preptime,
                  Cuisine,
              },
              { new: true, runValidators: true }  // Return the updated recipe and run schema validators
          );
  
          // If no recipe was found, return an error
          if (!recipe) {
              return res.status(404).json({
                  success: false,
                  message: "Recipe not found",
              });
          }
  
          // Return the updated recipe
          return res.status(200).json({
              success: true,
              message: "Recipe updated successfully",
              data: recipe,
          });
      } catch (err) {
          return res.status(500).json({
              success: false,
              message: "Internal Server Error",
              error: err.message,
          });
      }
  };
  
