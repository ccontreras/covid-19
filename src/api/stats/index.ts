import http from "../http";
import { NCovOverallResponse } from "../../types";

const PATH_OVERALL_STATS = "/overall";

const getGlobalStats = (): Promise<NCovOverallResponse> =>
  http.get(PATH_OVERALL_STATS);

export { getGlobalStats };
