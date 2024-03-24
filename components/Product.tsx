import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { PRODUCT_DETAILS_SCREEN } from "../constants";
import { productDataType } from "../constants/types";

const Product = ({ item }: { item: productDataType }) => {
  const navigation = useNavigation();

  const {
    name,
    mainImage,
    SKU,
    price: { amount },
  } = item;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(PRODUCT_DETAILS_SCREEN, { product: item })
      }
      style={style.container}
    >
      {item ? (
        <View style={style.imgContainer}>
          <Image source={{ uri: mainImage }} style={style.image} />
          <View>
            <View>
              <Text style={style.font_14}>
                {name.length > 20 ? `${name.substring(0, 15)}...` : name}
              </Text>
              <Text style={[style.font_14, style.fontWeight_500]}>
                {`£${amount}`}
              </Text>
            </View>
          </View>

          {/* displaying random no of item sold, sold number is not coming from the API */}
          <Text style={style.itemSold}>
            {Math.floor(Math.random() * SKU)} items sold
          </Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Product;

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 80,
  },
  imgContainer: {
    elevation: 5,
    shadowOffset: { height: 5, width: 5 },
    shadowRadius: 2,
    shadowColor: "grey",
    shadowOpacity: 0.4,
    padding: 15,
    width: Dimensions.get("screen").width / 2 - 20,
    height: 175,
  },
  container: {
    marginVertical: 8,
    marginLeft: 12,
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
  itemSold: {
    fontWeight: "400",
    marginBottom: 10,
    fontSize: 12,
    marginTop: 5,
  },
});
