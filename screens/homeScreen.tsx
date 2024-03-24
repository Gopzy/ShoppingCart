import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { ProductsType, Reducers } from "../constants/types";

import getProducts from "../store/action/getProducts";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const product =
    useSelector((state: Reducers) => state?.products?.productData) || [];

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <>{item ? <Product item={item} /> : null}</>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
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
