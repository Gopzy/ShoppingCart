import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import addToCart from "../store/action/addToCart";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // console.log("ItemCard", item);
  const {
    name,
    mainImage,
    SKU,
    price: { amount },
  } = item;

  const addItemToCart = () => {
    dispatch(addToCart(item));
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
    padding: 15,
    width: 155,
    height: 155,
    marginEnd: 22,
  },
  container: {
    padding: 15,
  },
  iconStyle: {
    position: "absolute",
    right: -5,
    bottom: -12,
  },
  font_14: {
    fontSize: 14,
  },
  fontWeight_500: {
    fontWeight: "500",
  },
});
