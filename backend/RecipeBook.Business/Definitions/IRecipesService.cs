using RecipeBook.Repository.Models;
using System.Collections.Generic;

namespace RecipeBook.Business.Definitions
{
    public interface IRecipesService
    {
        IEnumerable<Recipe> GetRecipes();
        Recipe GetRecipe(string id);
    }
}
