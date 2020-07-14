interface OutputData {
  print(data: number, team: string): void;
}

interface AnalyzeData {
  data: number;
  team: string;
  run(): void;
}

export class Summary {
  constructor(public analyzer: AnalyzeData, public printData: OutputData) {}
  show() {
    this.analyzer.run();
    this.printData.print(this.analyzer.data, this.analyzer.team);
  }
}
