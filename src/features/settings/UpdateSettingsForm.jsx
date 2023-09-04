import Form from '../../ui/Form'
import FormRow from '../../ui/FormRow'
import Input from '../../ui/Input'
import { useGetSettings } from './useGetSettings'
import Spinner from '../../ui/Spinner'
import { useUpdateSettings } from './useUpdateSetting'
function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGeustPerBooking,
      breakfastPrice,
    } = {},
  } = useGetSettings()
  const { updateSetting } = useUpdateSettings()

  const handleUpdate = (e, field) => {
    const { value } = e.target
    updateSetting({ [field]: value })
  }
  if (isLoading) return <Spinner />
  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input
          type='number'
          id='min_nights'
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          type='number'
          id='max_nights'
          onBlur={(e) => handleUpdate(e, 'maxBookingLength')}
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          type='number'
          id='max_guests'
          defaultValue={maxGeustPerBooking}
          onBlur={(e) => handleUpdate(e, 'maxGeustPerBooking')}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          type='number'
          id='breakfast_price'
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
        />
      </FormRow>
    </Form>
  )
}

export default UpdateSettingsForm
