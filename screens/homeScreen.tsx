import { useEffect, useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

import fetchProducts from "../store/action/fetchProducts";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state?.products) || [];

  console.log("productData >>>>>>>", products?.productData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const renderItem = ({ item }) => {
    return <View>{item ? <ProductCard item={item} /> : null}</View>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products?.productData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 50,
  },
  input: {
    height: 40,
    width: 180,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
