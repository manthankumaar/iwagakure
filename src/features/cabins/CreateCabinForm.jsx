/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form'
import { useAddCabin } from './useAddCabin'
import { useEditCabin } from './useEditCabin'

import Input from '../../ui/Input'
import Form from '../../ui/Form'
import Button from '../../ui/Button'
import FileInput from '../../ui/FileInput'
import Textarea from '../../ui/Textarea'
import FormRow from '../../ui/FormRow'

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit
  const isToEdit = Boolean(editId)
  const { addCabin, isAdding } = useAddCabin()
  const { editCabin, isEditing } = useEditCabin()

  const isWorking = isAdding || isEditing
  const { register, handleSubmit, getValues, formState, reset } = useForm({
    defaultValues: isToEdit ? editValues : {},
  })

  const onSubmit = (data) => {
    const image = typeof data.image === 'string' ? data.image : data.image[0]
    if (isToEdit) {
      editCabin(
        { cabinData: { ...data, image: image }, id: editId },
        {
          onSuccess: () => {
            reset()
            onCloseModal?.()
          },
        }
      )
    } else {
      addCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset()
            onCloseModal?.()
          },
        }
      )
    }
  }
  const { errors } = formState

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label='Cabin name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label='Maximum Capacity' error={errors?.maxCapacity?.message}>
        <Input
          type='number'
          disabled={isWorking}
          id='maxCapacity'
          {...register('maxCapacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should atleast be 1',
            },
          })}
        />
      </FormRow>

      <FormRow label='Regular price' error={errors?.regularPrice?.message}>
        <Input
          type='number'
          id='regularPrice'
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label={'Discount'} error={errors?.discount?.message}>
        <Input
          type='number'
          id='discount'
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) => {
              return (
                value <= getValues().regularPrice ||
                'Discount Should be less that the regular price'
              )
            },
          })}
        />
      </FormRow>

      <FormRow label='Description' error={errors?.description?.message}>
        <Textarea
          type='number'
          id='description'
          disabled={isWorking}
          defaultValue=''
          {...register('description')}
        />
      </FormRow>

      <FormRow label='Cabin photos' error={errors?.image?.message}>
        <FileInput
          id='image'
          disabled={isWorking}
          accept='image/*'
          {...register('image', {
            required: isToEdit ? false : 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          type='reset'
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isToEdit ? <>Edit cabin</> : <>Create New Cabin</>}
        </Button>
      </FormRow>
    </Form>
  )
}

export default CreateCabinForm
