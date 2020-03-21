import { useState, useEffect } from "react";

import { NCovCovidApiImpl } from "../api";

type GlobalStatsState = {
  isLoading: boolean;
  globalStats?: import("../api").GlobalStatsResponse;
};

export const useGlobalStats = () => {
  const [state, setState] = useState<GlobalStatsState>({
    isLoading: true
  });

  useEffect(() => {
    const api = new NCovCovidApiImpl();
    api
      .getGlobalStats()
      .then(globalStats => setState({ isLoading: false, globalStats }));
  }, []);

  return state;
};
