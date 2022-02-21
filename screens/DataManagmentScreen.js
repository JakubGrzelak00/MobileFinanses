import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomMenu from "../components/BottomMenu";
import IconsList from "../constants/IconsList";

const DataManagmentScreen = (props) => {
  const navigationHandler = (route) => {
    props.navigation.navigate({ routeName: route });
  };

  let iconsStatusList = IconsList;
  iconsStatusList.managment = true;
  iconsStatusList.settings = false;
  iconsStatusList.home = false;
  return (
    <View style={styles.screen}>
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

export default DataManagmentScreen;
