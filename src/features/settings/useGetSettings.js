import { useQuery } from '@tanstack/react-query'
import { getSettings } from '../../services/apiSettings'

export const useGetSettings = () => {
  const { isLoading, data: settings } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  })
  return { isLoading, settings }
}
