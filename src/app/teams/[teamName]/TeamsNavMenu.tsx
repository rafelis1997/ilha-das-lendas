import { api } from "@/lib/axios";
import { TeamDto } from "@/Dtos/teamsDto";
import { TeamsNavMenuList } from "@/components/TeamsNavMenuList";

async function getTeamsData() {
  const { data }: {data: TeamDto[]} = await api.get(`/teams`)
  return data
}

export default async function TeamsNavMenu() {
  const data = await getTeamsData()

  return (
    <div className="flex flex-col bg-slate-200 relative">
        <TeamsNavMenuList teamsList={data}/>
    </div>
  )
}
