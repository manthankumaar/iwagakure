import { useQuery } from '@tanstack/react-query'
import { getCabins } from '../../services/apiCabins'

export const useCabin = () => {
  const {
    data: cabins,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['cabin'],
    queryFn: getCabins,
  })
  return { cabins, error, isLoading }
}
