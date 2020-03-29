import { useState, useEffect } from "react";

import { getGlobalStats } from "../api";

type OverallStatsStateType = {
  isLoading?: boolean;
  isError?: boolean;
  overallStats?: import("../types").OverallType;
};
type OverallStatsType = {
  state: OverallStatsStateType;
  loadOverallStats: () => void;
}
export const useOverallStats = (): OverallStatsType => {
  const [state, setState] = useState<OverallStatsStateType>({});

  const loadOverallStats = () => {
    setState({ isLoading: true, isError: false, overallStats: undefined });
    getGlobalStats()
      .then(overallStats => setState({ isLoading: false, overallStats }))
      .catch(e => {
        setState({ isError: true, isLoading: false });
      });
  }

  useEffect(() => {
    loadOverallStats();
  }, []);

  return {
    state,
    loadOverallStats
  };
};
