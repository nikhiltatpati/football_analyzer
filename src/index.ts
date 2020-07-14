import { Summary } from "./Summary";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { WinAnalyzer } from "./WinAnalyzer";
import { PrintReport } from "./PrintReport";

const csvReader = new CsvFileReader("football.csv");
csvReader.read();

const matchReader = new MatchReader(csvReader);
matchReader.mapRow();

const summary = new Summary(
  new WinAnalyzer(matchReader.matches, "West Ham"),
  new PrintReport()
);
summary.show();
