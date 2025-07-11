import { Header } from "components";
import React from "react";

const dashboard = () => {
  const user = { name: "Aditya" };
  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? "Guest"} 🙏`}
        description="This is the dashboard page"
      />
    </main>
  );
};

export default dashboard;
