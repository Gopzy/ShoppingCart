import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { ProductsType, Reducers } from "../constants/types";

import getProducts from "../store/action/getProducts";

export default function HomeScreen() {
  const dispatch = useDispatch();
  const product =
    useSelector((state: Reducers) => state?.products?.productData) || [];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts());

    // dispatch(
    //   getProducts(() => {
    //     setProducts(product);
    //   })
    // );
  }, []);

  const renderItem = ({ item }: { item: ProductsType }) => (
    <>{item ? <ProductCard item={item} /> : null}</>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={product || []}
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
