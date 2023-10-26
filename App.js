import Gameboard from "./screens/Gameboard"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Home from "./screens/Home"
import { NavigationContainer } from '@react-navigation/native';
import Scoreboard from "./screens/Scoreboard"


const Tab = createBottomTabNavigator();
export default function App() {
  return (
  <NavigationContainer>
      <Tab.Navigator
        //initialRouteName="Home"
        sceneContainerStyle={{ backgroundColor: "transparent" }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === "Info") {
              iconName = focused ?
                "information"
                :
                "information-outline"
            }
            else if (route.name === "Pelilauta") {
              iconName = focused ?
                "dice-multiple"
                :
                "dice-multiple-outline"
            }
            else if (route.name === "Pistetaulu") {
              iconName = focused ?
                "view-list"
                :
                "view-list-outline"
            }
            return <MaterialCommunityIcons
              name={iconName}
              size={size}
              color={color}

            />
          },
          tabBarActiveTintColor: "#D36B00",
          tabBarInactiveTintColor: "#42032C"
        })}
      >
        <Tab.Screen
          name="Info"
          component={Home}
          options={{
            tabBarStyle: { display: "none" },
            headerShown:false 
          }}
        />
        <Tab.Screen
          name="Pelilauta"
          component={Gameboard}
          options={{ headerShown: false }}

        />
        <Tab.Screen
          name="Pistetaulu"
          component={Scoreboard}
          options={{ headerShown: false }}
        />

      </Tab.Navigator>
    </NavigationContainer>
 
  );
}