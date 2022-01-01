import { useTranslation } from 'react-i18next'

import Carousel from 'components/carousel'
import RecipeCard from 'components/recipe-card'
import RecipeHighlight from 'components/recipe-highlight'

import './home.scss'

function Home() {
  const { t } = useTranslation()

  const recipes = [
    {
      title: 'Recipe A',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
    {
      title: 'Recipe B',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
    {
      title: 'Recipe C',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
    {
      title: 'Recipe D',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
    {
      title: 'Recipe E',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
    {
      title: 'Recipe F',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
    {
      title: 'Recipe G',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
    {
      title: 'Recipe H',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
    {
      title: 'Recipe I',
      description: 'This is an awesome recipe repice for a sunday lunch.',
    },
  ]

  return (
    <div className="home">
      <div className="home__highlights">
        <Carousel>
          {recipes.map((recipe) => (
            <RecipeHighlight title={recipe.title} />
          ))}
        </Carousel>
      </div>
      <div className="home__section-title">{t('top-recipes')}</div>
      <div className="home__section-recipes">
        {recipes.map((recipe) => (
          <RecipeCard info={recipe} />
        ))}
      </div>
      <div className="home__section-title">{t('last-recipes')}</div>
      <div className="home__section-recipes">
        {recipes.map((recipe) => (
          <RecipeCard info={recipe} />
        ))}
      </div>
    </div>
  )
}

export default Home
