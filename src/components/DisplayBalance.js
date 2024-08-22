import React from "react";
import { Statistic, StatisticLabel, StatisticValue } from "semantic-ui-react";

function DisplayBalance({ title, value, color = "black", size='tiny' }) {
  return (
    <Statistic size={size} color={color}>
      <StatisticLabel style={{ textAlign: "left" }}>{title}:</StatisticLabel>
      <StatisticValue>{value}</StatisticValue>
    </Statistic>
  );
}

export default DisplayBalance;
