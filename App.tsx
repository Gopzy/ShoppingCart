import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/homeScreen";
import configureStore from "./store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "./screens/ProductDetailScreen";
import CartScreen from "./screens/cartScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function Home() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => <Icon name="home" size={25} />,
          }}
        />
        <Tab.Screen
          options={{
            headerShown: true,
            tabBarLabel: "Cart",
            tabBarIcon: ({ color, size }) => (
              <Icon name="shopping-cart" size={25} />
            ),
          }}
          name="Cart"
          component={CartScreen}
        />
      </Tab.Navigator>
    );
  }

  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
