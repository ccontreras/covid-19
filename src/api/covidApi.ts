import http from "./http";

const getGlobalStats = async(): Promise<import("../types").OverallType> => {
    const { data } = await http.get<import("../types").OverallResponseType>(
      "/overall"
    );
    return data.results[0];
  }

export {getGlobalStats}