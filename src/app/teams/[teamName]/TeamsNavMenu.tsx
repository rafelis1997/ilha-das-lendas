import { api } from '@/lib/axios'
import { TeamDto } from '@/Dtos/teamsDto'
import { TeamsNavMenuList } from '@/components/TeamsNavMenuList'

async function getTeamsData() {
  const { data }: { data: TeamDto[] } = await api.get(`/teams`)
  return data
}

export default async function TeamsNavMenu() {
  const data = await getTeamsData()

  return (
    <div className="relative flex flex-col bg-violet-800">
      <TeamsNavMenuList teamsList={data} />
    </div>
  )
}
