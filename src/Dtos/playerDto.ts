export interface PlayerDto {
  id: string;
  playerPhoto: string;
  playerRole: string;
  playerNick: string;
  playerName: string;
  teamId: string;
  score: {
    score: number;
  }[];
  mainRoaster: boolean;
}
