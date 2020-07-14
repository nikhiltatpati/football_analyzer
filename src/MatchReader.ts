import { parseDate } from "./utils";
import { MatchResults } from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResults, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
    matches:MatchData[]=[]
  constructor(public dataReader: DataReader) {}

  mapRow(): void {
    this.matches=this.dataReader.data.map(
      (element): MatchData => {
        return [
          parseDate(element[0]),
          element[1],
          element[2],
          parseInt(element[3]),
          parseInt(element[4]),
          element[5] as MatchResults,
          element[6],
        ];
      }
    );
  }
}
