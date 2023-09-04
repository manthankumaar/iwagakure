import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEditCabin } from '../../services/apiCabins'
import { toast } from 'react-hot-toast'

export const useEditCabin = () => {
  const queryClient = useQueryClient()

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ cabinData, id }) => addEditCabin(cabinData, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      })
      toast.success('Cabin edited Successfully')
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })
  return { editCabin, isEditing }
}
