function RecipeCard({ info }) {
  return (
    <div className="recipe-card">
      <div className="recipe-card__title">{info.title}</div>
      <div className="recipe-card__description">{info.description}</div>
    </div>
  )
}

export default RecipeCard
