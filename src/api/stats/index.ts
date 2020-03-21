import http from "../http";
import { NCovOverallResponse } from "../../types";

const PATH_OVERALL_STATS = "/overall";

const getGlobalStats = async (): Promise<NCovOverallResponse> => {
  const { data } = await http.get(PATH_OVERALL_STATS);
  return data;
};

export { getGlobalStats };
