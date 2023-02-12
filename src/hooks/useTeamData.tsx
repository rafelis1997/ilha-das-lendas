import { TeamDto } from '@/Dtos/teamsDto'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'

export const useTeamData = (teamName: string) =>
  useQuery(['team', teamName], async () => {
    const { data } = await api.get(`/teams/${teamName}`)
    return data as TeamDto
  })
