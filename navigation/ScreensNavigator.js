import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import DashboardScreen from "../screens/DashboardScreen";
import DataManagmentScreen from "../screens/DataManagmentScreen";
import SettingsScreen from "../screens/SettingsScreen";

const ScreensNavigator = createStackNavigator({
  Dashboard: DashboardScreen,
  DataManagment: DataManagmentScreen,
  Settings: SettingsScreen,
});

export default createAppContainer(ScreensNavigator);
