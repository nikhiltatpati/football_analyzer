import { MatchData } from "./MatchData";

import { MatchResults } from "./MatchResults";

export class WinAnalyzer {
  data: number = 0;
  constructor(public matchData: MatchData[], public team: string) {}
  run() {
    for (let match of this.matchData) {
      if (match[1] === this.team && match[5] === MatchResults.HomeWin) {
        this.data++;
      } else if (match[2] === this.team && match[5] === MatchResults.AwayWin) {
        this.data++;
      }
    }
  }
}
