import React from "react";
import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MenuIcon = (props) => {
  return (
    <View
      style={props.active ? styles.iconContainerActive : styles.iconContainer}
    >
      <View>
        <Ionicons name={props.iconName} size={40} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainerActive: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#006ee6",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

export default MenuIcon;
