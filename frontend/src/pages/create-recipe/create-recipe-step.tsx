import { faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input } from 'antd'
import { v4 as uuidV4 } from 'uuid'
import { MouseEventHandler, useCallback, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import CreateRecipeIngredient, {
  CreateRecipeIngredientInfo,
} from './create-recipe-ingredient'

import './create-recipe-step.scss'

interface CreateRecipeStepInfo {
  description?: string
  ingredients: { [id: string]: CreateRecipeIngredientInfo }
}

interface CreateRecipeStepProps {
  id: string
  onRemove: (id: string) => void
}

function CreateRecipeStep({
  id,
  onRemove,
  t,
}: CreateRecipeStepProps & WithTranslation) {
  const [stepInfo, setStepInfo] = useState<CreateRecipeStepInfo>({
    ingredients: {},
  })

  const remove = useCallback(() => {
    onRemove(id)
  }, [id, onRemove])

  const addIngredient: MouseEventHandler<HTMLButtonElement> =
    useCallback(() => {
      const nextStepInfo = { ...stepInfo }
      nextStepInfo.ingredients[uuidV4()] = {}
      setStepInfo(nextStepInfo)
    }, [stepInfo])

  const removeIngredient: (id: string) => void = useCallback(
    (id) => {
      const nextStepInfo = { ...stepInfo }
      delete nextStepInfo.ingredients[id]
      setStepInfo(nextStepInfo)
    },
    [stepInfo]
  )

  return (
    <div className="create-recipe-step">
      <div className="create-recipe-step__title">
        Step 1
        <Button
          icon={<FontAwesomeIcon icon={faTrashAlt} />}
          onClick={remove}
          danger
        />
      </div>
      <div className="create-recipe-step__ingredients">
        {t('general.ingredients')}
        <Button
          icon={<FontAwesomeIcon icon={faPlus} />}
          onClick={addIngredient}
        />
      </div>
      <div>
        {Object.keys(stepInfo.ingredients)?.map((ingredient) => (
          <CreateRecipeIngredient
            key={ingredient}
            id={ingredient}
            onRemove={removeIngredient}
          />
        ))}
      </div>
      <Form.Item label={t('general.description')}>
        <Input.TextArea />
      </Form.Item>
    </div>
  )
}

export default withTranslation()(CreateRecipeStep)
export type { CreateRecipeStepProps, CreateRecipeStepInfo }
