import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteCabin as deleteCabinApi } from '../../services/apiCabins'
import { toast } from 'react-hot-toast'

export const useDeleteCabin = () => {
  const queryClient = useQueryClient()
  const { mutate: deleteCabin, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cabin'],
      })
      toast.success(' Deleted successfully')
    },
    onError: (err) => {
      toast.error(err.message)
    },
  })
  return { deleteCabin, isDeleting }
}
