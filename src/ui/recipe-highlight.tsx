import { ReactElement } from 'react'

interface RecipeHighlightProps {
  title: string
}

function RecipeHighlight({ title }: RecipeHighlightProps): ReactElement {
  return (
    <div className="recipe-highlight">
      <div className="recipe-highlight__title">{title}</div>
    </div>
  )
}

export default RecipeHighlight
