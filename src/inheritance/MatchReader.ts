import { CsvFileReader } from "./CsvFileReader";
import { parseDate } from "./utils";
import { MatchResults } from "./MatchResults";

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(filename: string) {
    super(filename);
  }

  mapRow(element: string[]): MatchData {
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
}
