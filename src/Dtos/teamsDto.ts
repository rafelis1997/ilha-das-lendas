import { COLORS } from "@/components/PlayerCard";
import { PlayerDto } from "./playerDto";

export interface TeamDto {
  id: string;
  position: number;
  teamName: string;
  teamRecord: string;
  teamLogo: string;
  teamLinkName: string;
  teamColor: COLORS;
  player: PlayerDto[];
}
