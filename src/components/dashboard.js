import React from "react";
import NewsCard from "./card/newsCard";
import Appbar from "./app-bar";

function Dashboard() {
  return (
    <div>
      <Appbar/>
      <NewsCard />
    </div>
  );
}

export default Dashboard;
