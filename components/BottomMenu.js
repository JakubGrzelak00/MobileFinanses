import React from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import MenuIcon from "./MenuIcon";

const BottomMenu = (props) => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => props.navigationHandler("DataManagment")}
        >
          <MenuIcon
            iconName="briefcase-outline"
            active={props.iconsStatusList.managment}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => props.navigationHandler("Dashboard")}
        >
          <MenuIcon
            iconName="home-outline"
            active={props.iconsStatusList.home}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => props.navigationHandler("Settings")}
        >
          <MenuIcon
            iconName="settings-outline"
            active={props.iconsStatusList.settings}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-evenly",

    height: Dimensions.get("window").height * 0.08,
    width: Dimensions.get("window").width,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  iconContainer: {
    flex: 1,
  },
});

export default BottomMenu;
