import { ICovidApi } from "..";
import httpClient from "../httpClient";
import { NCovOverallResponse } from "./types";

const PATH_OVERALL_STATS = "/overall";

export class NCovCovidApiImpl implements ICovidApi {
  async getGlobalStats(): Promise<import("..").GlobalStatsResponse> {
    const { data } = await httpClient.get<NCovOverallResponse>(
      PATH_OVERALL_STATS
    );
    const stats = data.results[0];
    return {
      dead: stats.deadCount,
      healed: stats.curedCount,
      infected: stats.confirmedCount,
      severe: stats.seriousCount
    };
  }
}
