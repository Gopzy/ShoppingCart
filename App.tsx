import { Provider } from "react-redux";
import HomeScreen from "./screens/homeScreen";
import configureStore from "./store/configureStore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "./screens/productDetailScreen";
import CartScreen from "./screens/cartScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import { productDataType } from "./constants/types";
import { CART_SCREEN, PRODUCT_DETAILS_SCREEN } from "./constants";

export type rootStactParams = {
  Home: undefined;
  Cart: undefined;
  ProductDetail: { product: productDataType };
};

export default function App() {
  const Stack = createNativeStackNavigator<rootStactParams>();
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
            tabBarIcon: () => <Icon name="home" size={25} />,
          }}
        />
        <Tab.Screen
          options={{
            headerShown: true,
            tabBarLabel: "Cart",
            tabBarIcon: () => <Icon name="shopping-cart" size={25} />,
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
          <Stack.Screen
            name={PRODUCT_DETAILS_SCREEN}
            component={ProductDetail}
          />
          <Stack.Screen name={CART_SCREEN} component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
