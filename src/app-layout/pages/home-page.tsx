import { useTranslation } from 'react-i18next'
import AppBody from 'app-layout/app-body'

import Carousel from 'ui/carousel'
import RecipeCard from 'ui/recipe-card'
import RecipeHighlight from 'ui/recipe-highlight'

import './home-page.scss'

function Home() {
  const { t } = useTranslation()

  const recipes = [
    {
      title: 'Recipe A',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
    {
      title: 'Recipe B',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
    {
      title: 'Recipe C',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
    {
      title: 'Recipe D',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
    {
      title: 'Recipe E',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
    {
      title: 'Recipe F',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
    {
      title: 'Recipe G',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
    {
      title: 'Recipe H',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
    {
      title: 'Recipe I',
      description: 'This is an awesome recipe recipe for a sunday lunch.',
    },
  ]

  return (
    <AppBody className="home">
      <div className="home__highlights">
        <Carousel>
          {recipes.map((recipe, index) => (
            <RecipeHighlight key={index} title={recipe.title} />
          ))}
        </Carousel>
      </div>
      <div className="home__section-title">{t('top-recipes')}</div>
      <div className="home__section-recipes">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} info={recipe} />
        ))}
      </div>
      <div className="home__section-title">{t('last-recipes')}</div>
      <div className="home__section-recipes">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} info={recipe} />
        ))}
      </div>
    </AppBody>
  )
}

export default Home
