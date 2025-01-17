import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { View, BackAndroid } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TaskScreen from "./screens/TaskScreen";
import Task from "./screens/Task";
import CityTask from "./screens/CityTask";
import CityTaskScreen from "./screens/CityTaskScreen";
import Outside from "./screens/navigation/OutSide";
import Inside from "./screens/navigation/Inside";
import WebToCheck from "./screens/WebToCheck";
import Lift from "./screens/navigation/lift";
import ActionSpace from "./screens/navigation/actionSpace";
import Questions from "./screens/Questions";
import Wellcome from "./screens/navigation/Wellcome";
import CityPlace from "./screens/navigation/cityPlace";
import Registration from "./screens/Registration";
import FinancesTwo from "./screens/FinancesTwo";
import Accounting from "./screens/Accounting";
import Bussiness from "./screens/Bussiness";
import SplashWin from "./screens/SplashScreen";
import MoneyRoom from "./screens/MoneyRoom";
import TaskID from "./screens/IDtask";
import ActionSpaceTwo from "./screens/navigation/actionSpaceSecond";
import LeadersBoard from "./screens/LeadersBoard";
import Finished from "./screens/navigation/Finished";

const Stack = createStackNavigator();

class App extends Component {
  
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar style="auto" />
        <NavigationContainer>
        <Stack.Navigator initialRouteName="splash">
          <Stack.Screen
            name="taskScreen"
            component={TaskScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="task"
            component={Task}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="citytaskScreen"
            component={CityTaskScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="citytask"
            component={CityTask}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="outside"
            component={Outside}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="inside"
            component={Inside}
            options={{ headerShown: false }}
          />
            <Stack.Screen
            name="webtocheck"
            component={WebToCheck}
            options={{ headerShown: true, title: 'Žiniatinklis' }}
            //options={{  }}
          />
            <Stack.Screen
            name="lift"
            component={Lift}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="actionSpace"
            component={ActionSpace}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="questions"
            component={Questions}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="wellcome"
            component={Wellcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="cityPlace"
            component={CityPlace}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="registration"
            component={Registration}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="financestwo"
            component={FinancesTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="accounting"
            component={Accounting}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="bussiness"
            component={Bussiness}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="splash"
            component={SplashWin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="moneyroom"
            component={MoneyRoom}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="idtask"
            component={TaskID}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="actionSpaceTwo"
            component={ActionSpaceTwo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="leadersboard"
            component={LeadersBoard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="finished"
            component={Finished}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </View>

    );
  }
}

export default App;
