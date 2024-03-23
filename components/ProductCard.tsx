import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/reducer/cardReducer";
import DisplayAlert from "./alert";

export type cardObj = {
  quantity: number;
  id: number;
  name: string;
  mainImage: string;
  description: string;
  amount: number;
};

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {
    name,
    mainImage,
    SKU,
    id,
    description,
    price: { amount },
  } = item;

  const addItemToCart = async () => {
    const cardObj: cardObj = {
      quantity: 0,
      id,
      name,
      mainImage,
      description,
      amount,
    };
    await dispatch(addToCart(cardObj));

    DisplayAlert({
      title: "Product added",
      message: "Continue shupping",
      onPressFun: () => {},
    });
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
      style={style.container}
    >
      {item ? (
        <View style={style.imgContainer}>
          <Image source={{ uri: mainImage }} style={style.image} />
          <View>
            <View>
              <Text style={style.font_14}>
                {name.length > 18 ? `${name.substring(0, 13)}...` : name}
              </Text>
              <Text style={[style.font_14, style.fontWeight_500]}>
                {`$ ${amount}`}
              </Text>
            </View>
            <View style={style.iconStyle}>
              <Icon
                name="shopping-cart"
                size={25}
                color="#900"
                onPress={addItemToCart}
              />
            </View>
          </View>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default ProductCard;

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 80,
  },
  imgContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    padding: 15,
    width: 150,
    height: 175,
    marginEnd: 22,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  iconStyle: {
    position: "absolute",
    right: -5,
    bottom: -30,
  },
  font_14: {
    fontSize: 14,
  },
  fontWeight_500: {
    fontWeight: "500",
  },
});
