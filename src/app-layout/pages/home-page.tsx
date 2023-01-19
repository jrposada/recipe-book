import { useTranslation } from 'react-i18next'
import AppBody from 'app-layout/app-body'

import Carousel from 'ui/carousel'
import RecipeCard from 'ui/recipe-card'
import RecipeHighlight from 'ui/recipe-highlight'
import useRecipes from 'core/api/hooks/recipes/use-recipes'

import './home-page.scss'

function Home() {
  const { t } = useTranslation()

  const { data: recipes } = useRecipes()

  return (
    <AppBody className="home">
      <div className="home__highlights">
        <Carousel>
          {recipes?.data.map((recipe, index) => (
            <RecipeHighlight key={index} title={recipe.name} />
          ))}
        </Carousel>
      </div>
      <div className="home__section-title">{t('top-recipes')}</div>
      <div className="home__section-recipes">
        {recipes?.data.map((recipe, index) => (
          <RecipeCard key={index} info={recipe} />
        ))}
      </div>
      <div className="home__section-title">{t('last-recipes')}</div>
      <div className="home__section-recipes">
        {recipes?.data.map((recipe, index) => (
          <RecipeCard key={index} info={recipe} />
        ))}
      </div>
    </AppBody>
  )
}

export default Home
