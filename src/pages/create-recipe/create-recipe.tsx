import { Button, Form, Input } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { WithTranslation, withTranslation } from 'react-i18next'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import CreateRecipeStep, { CreateRecipeStepInfo } from './create-recipe-step'

import './create-recipe.scss'

interface CreateRecipeProps {}

function CreateRecipe({ t }: CreateRecipeProps & WithTranslation) {
  const [steps, setSteps] = useState<{
    [id: string]: CreateRecipeStepInfo
  }>({})

  const addStep = useCallback(() => {
    const nextSteps = { ...steps }
    nextSteps[uuidV4()] = { ingredients: {} }
    setSteps(nextSteps)
  }, [steps])

  const removeStep: (id: string) => void = useCallback(
    (stepId) => {
      const nextSteps = { ...steps }
      delete nextSteps[stepId]
      setSteps(nextSteps)
    },
    [steps]
  )

  const submit: (values: any) => void = useCallback((values) => {
    console.log(values)
  }, [])

  return (
    <div className="create-recipe">
      <Form
        name="recipe"
        layout="vertical"
        onFinish={submit}
        autoComplete="off"
      >
        <Form.Item label={t('create-recipe.recipe-name')} name="title">
          <Input />
        </Form.Item>

        <div>
          {Object.keys(steps).map((stepId) => (
            <CreateRecipeStep key={stepId} id={stepId} onRemove={removeStep} />
          ))}
        </div>

        <Form.Item className="create-recipe__form-item-button">
          <Button
            type="primary"
            onClick={addStep}
            className="create-recipe__button"
          >
            {t('create-recipe.add-step')}
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Form.Item>

        <Form.Item className="create-recipe__form-item-button create-recipe__form-item-button--right">
          <Button
            type="primary"
            htmlType="submit"
            className="create-recipe__button"
          >
            {t('create-recipe.submit')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default withTranslation()(CreateRecipe)
export type { CreateRecipeProps }
