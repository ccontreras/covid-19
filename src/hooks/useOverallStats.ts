import { useState, useEffect } from "react";

import { getGlobalStats } from "../api";

type GlobalStatsState = {
  isLoading?: boolean;
  isError?: boolean;
  overallStats?: import("../types").OverallType;
};

export const useOverallStats = () => {
  const [state, setState] = useState<GlobalStatsState>({
    isLoading: true,
    isError: false
  });

  useEffect(() => {
    getGlobalStats()
      .then(overallStats => setState({ isLoading: false, overallStats }))
      .catch(e => {
        setState({ isError: true, isLoading: false });
      });
  }, []);

  return state;
};
