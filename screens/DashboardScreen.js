import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomMenu from "../components/BottomMenu";
import IconsList from "../constants/IconsList";
import Graphs from "../components/Graphs";

const DashboardScreen = (props) => {
  const navigationHandler = (route) => {
    props.navigation.navigate({ routeName: route });
  };

  let iconsStatusList = IconsList;
  iconsStatusList.managment = false;
  iconsStatusList.settings = false;
  iconsStatusList.home = true;
  return (
    <View style={styles.screen}>
      <Graphs />
      <BottomMenu
        iconsStatusList={iconsStatusList}
        navigationHandler={navigationHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardScreen;
