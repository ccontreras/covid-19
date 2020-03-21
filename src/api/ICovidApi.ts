import { GlobalStatsResponse } from "./types";

export interface ICovidApi {
  getGlobalStats(): Promise<GlobalStatsResponse>;
}
