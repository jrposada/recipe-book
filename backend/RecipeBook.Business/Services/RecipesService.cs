using RecipeBook.Business.Definitions;
using RecipeBook.Repository.Models;
using System.Collections.Generic;

namespace RecipeBook.Business.Services
{
    public class RecipesService : IRecipesService
    {
        private readonly Dictionary<string, Recipe> recipes = new()
        {
            {"1", new Recipe() { Id = "1", Title = "Recipe 1" } },
            {"2", new Recipe() { Id = "2", Title = "Recipe 2" } },
        };

        public Recipe GetRecipe(string id)
        {
            recipes.TryGetValue(id, out Recipe recipe);

            return recipe;
        }

        public IEnumerable<Recipe> GetRecipes()
        {
            return recipes.Values;
        }
    }
}
