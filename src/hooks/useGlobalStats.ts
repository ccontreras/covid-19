import { useState, useEffect } from "react";

import { getGlobalStats } from "../api/stats";
import { NCovOverallResponse } from "../types";

type GlobalStatsState = {
  isLoading: boolean;
  globalStats?: NCovOverallResponse;
};

export const useGlobalStats = () => {
  const [state, setState] = useState<GlobalStatsState>({
    isLoading: true
  });

  useEffect(() => {
    getGlobalStats().then(globalStats =>
      setState({ isLoading: false, globalStats })
    );
  }, []);

  return state;
};
