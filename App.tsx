import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/home";
import configureStore from "./store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "./screens/ProductDetail";
import CartScreen from "./screens/cartScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
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
