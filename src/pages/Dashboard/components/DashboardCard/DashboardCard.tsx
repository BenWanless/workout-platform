import MainCard from "../../../../components/MainCard";
import DashboardTabs from "./DasboardTabs";

export function DashboardCard() {
  return (
    <>
      <MainCard>
        <h3>Your Workouts</h3>
        <DashboardTabs />
      </MainCard>
    </>
  );
}
