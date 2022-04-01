import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Input } from 'antd'
import { useCallback } from 'react'

import './create-recipe-ingredient.scss'

interface CreateRecipeIngredientInfo {
  name?: string
  unit?: string
}

interface CreateRecipeIngredientProps {
  id: string
  onRemove: (id: string) => void
}

function CreateRecipeIngredient({ id, onRemove }: CreateRecipeIngredientProps) {
  const remove = useCallback(() => {
    onRemove(id)
  }, [id, onRemove])

  return (
    <div className="create-recipe-ingredient">
      <Form.Item>
        <Input />
      </Form.Item>
      <Button icon={<FontAwesomeIcon icon={faTimes} />} onClick={remove} />
    </div>
  )
}

export default CreateRecipeIngredient
export type { CreateRecipeIngredientProps, CreateRecipeIngredientInfo }
