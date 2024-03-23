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
import { useDispatch } from "react-redux";
import { cardObjectType } from "../components/ProductCard";
import colors from "../constants/colors";
import { addToCart } from "../store/reducer/cardReducer";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
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

  const addItemToCart = async () => {
    const cardObj: cardObjectType = {
      quantity: 0,
      id,
      name,
      mainImage,
      description,
      amount,
    };
    await dispatch(addToCart(cardObj));
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: mainImage }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
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
