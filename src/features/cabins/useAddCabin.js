import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addEditCabin } from '../../services/apiCabins'
import { toast } from 'react-hot-toast'

export const useAddCabin = () => {
  const queryClient = useQueryClient()

  const { mutate: addCabin, isLoading: isAdding } = useMutation({
    mutationFn: addEditCabin,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      })
      toast.success('Cabin added successfully')
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })
  return { addCabin, isAdding }
}
