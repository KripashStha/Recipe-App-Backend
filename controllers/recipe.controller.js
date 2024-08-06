//create recipe
const createRecipe = async (req,res) => {
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
  
  export default createRecipe;

  //