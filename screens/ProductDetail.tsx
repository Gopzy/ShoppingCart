import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../components/colors";
import { addToCartSlice } from "../store/reducer/cardSlice";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const cartSlice = useSelector((state) => state?.cartSlice) || [];

  console.log("cartSlice state value ::::", cartSlice);

  const dispatch = useDispatch();
  const {
    product: {
      name,
      mainImage,
      description,
      SKU,
      id,
      price: { amount },
    },
  } = route.params;

  const productData = route.params.product;

  const addItemToCart = async () => {
    const cardObj = {
      quantity: 0,
      id,
      name,
      mainImage,
      description,
      amount,
    };
    await dispatch(addToCartSlice(cardObj));

    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: mainImage }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>Available {SKU}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <TouchableOpacity onPress={addItemToCart} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "cover",
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: colors.primaryBlue,
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 205,
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetail;
