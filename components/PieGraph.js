import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";

const data = [
  {
    name: "Food",
    population: 215,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Travel",
    population: 28,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Cosmetics",
    population: 209,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Fun",
    population: 45,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
  {
    name: "Other",
    population: 67,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  },
];

const PieGraph = () => {
  return (
    <View style={styles.graphContainer}>
      <PieChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "#006ee6",
          backgroundGradientFrom: "#006ee6",
          backgroundGradientTo: "#3191f7",
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#006ee6",
          },
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        center={[10, 10]}
        absolute
      />
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PieGraph;
