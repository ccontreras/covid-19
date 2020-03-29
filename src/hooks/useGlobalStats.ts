import { useState, useEffect } from "react";

import { getGlobalStats } from "../api";

type GlobalStatsState = {
  isLoading: boolean;
  overallStats?: import("../types").OverallType;
};

export const useGlobalStats = () => {
  const [state, setState] = useState<GlobalStatsState>({
    isLoading: true
  });

  useEffect(() => {
    getGlobalStats()
      .then(overallStats => setState({ isLoading: false, overallStats }));
  }, []);

  return state;
};
