import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const BarGraph = () => {
  return (
    <View style={styles.graphContainer}>
      <BarChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundGradientFrom: "#1E2923",
          backgroundGradientFromOpacity: 0,
          backgroundGradientTo: "#08130D",
          backgroundGradientToOpacity: 0.0,
          color: (opacity = 1) => `rgba(0, 110, 230, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 110, 230, ${opacity})`,
        }}
        accessor={"population"}
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

export default BarGraph;
