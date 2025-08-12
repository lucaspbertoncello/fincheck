import { createContext } from "react";

interface IDashboardContext {
  areValuesVisible: boolean;
  toggleValueVisibility: () => void;
}

export const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext,
);
