import { TeamDto } from '@/Dtos/teamsDto'
import { api } from '@/lib/axios'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

export const useAllTeamsData = () => {
  const queryInfo = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const { data } = await api.get(`/teams`)
      return data as TeamDto[]
    },
  })
  return {
    data: useMemo(() => queryInfo.data, [queryInfo.data]),
  }
}
