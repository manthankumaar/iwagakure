import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateSetting as updateSettingApi } from '../../services/apiSettings'
import { toast } from 'react-hot-toast'

export const useUpdateSettings = () => {
  const queryClient = useQueryClient()
  const { mutate: updateSetting, isLoading } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success('Settings updated Successfully')
      queryClient.invalidateQueries['settings']
    },
    onError: (error) => {
      toast.error('Somtghing went wrongs')
      throw new Error(error.message)
    },
  })
  return { updateSetting, isLoading }
}
