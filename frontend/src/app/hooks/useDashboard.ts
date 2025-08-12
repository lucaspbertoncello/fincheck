import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext/context";

export function useDashboard() {
  return useContext(DashboardContext);
}
