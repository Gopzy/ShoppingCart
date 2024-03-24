import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProductsType } from "../constants/types";

export type cardObjectType = {
  quantity: number;
  id: string;
  name: string;
  mainImage: string;
  description: string;
  amount: number;
  selectedSize: [];
};

const Product = ({ item }: { item: ProductsType }) => {
  const navigation = useNavigation();

  const {
    name,
    mainImage,
    SKU,
    id,
    description,
    stockStatus,
    price: { amount },
  } = item;

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
  itemSold: {
    fontWeight: "400",
    marginBottom: 10,
    fontSize: 12,
    marginTop: 5,
  },
});
