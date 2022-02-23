import React from "react";
import { View, StyleSheet } from "react-native";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";

const Graphs = () => {
  return (
    <View style={style.graphsContainer}>
      <BarGraph />
      <PieGraph />
    </View>
  );
};

const style = StyleSheet.create({
  graphsContainer: {
    flex: 2,
    marginVertical: "5%",
  },
});

export default Graphs;
