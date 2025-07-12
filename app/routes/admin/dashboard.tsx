import { Header, StatsCard, TripCard } from "components";
import React from "react";

const dashboard = () => {
  const user = { name: "Aditya" };
  const dashboard = {
    totalUsers: 12450,
    usersJoined: { currentMonth: 280, lastMonth: 172 },
    totalTrips: 3210,
    tripsCreated: { currentMonth: 139, lastMonth: 180 },
    userRole: { total: 62, currentMonth: 30, lastMonth: 19 },
  };

  const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } =
    dashboard;

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 🙏`}
        description="This is the dashboard page"
      />
      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total Users"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total Trips"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Active Users"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <TripCard />
    </main>
  );
};

export default dashboard;
