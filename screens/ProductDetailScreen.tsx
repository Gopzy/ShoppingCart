import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { cardObjectType } from "../components/Product";
import colors from "../constants/colors";
import { addToCart } from "../store/reducer/cardReducer";
import { RadioButton } from "react-native-paper";

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<any>();

  const btnDisable = typeof checked !== "number";

  const {
    product: {
      name,
      brandName,
      colour,
      mainImage,
      description,
      SKU,
      id,
      sizes,
      stockStatus,
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
      selectedSize: sizes[checked],
    };
    await dispatch(addToCart(cardObj));
    navigation.navigate("Cart");
  };

  const renderRadioBtn = (item, index: { item: number; index: number }) => {
    return (
      <View style={styles.radioContainer}>
        <Text>{item}</Text>
        <RadioButton
          key={index}
          value={item.id}
          status={checked === index ? "checked" : "unchecked"}
          onPress={() => setChecked(index)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: mainImage }} style={styles.image} />
      <Text style={styles.brandName}>{brandName}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description.substring(0, 250)}</Text>
        <Text style={styles.color}>{`color: ${colour}`}</Text>
        <View style={styles.amount}>
          <Text style={styles.name}>{`£${amount}`}</Text>
          <Text style={[styles.name, styles.stock]}>{stockStatus}</Text>
        </View>
      </View>
      <View style={styles.radioBtn}>{sizes?.map(renderRadioBtn)}</View>
      <TouchableOpacity
        disabled={btnDisable}
        onPress={addItemToCart}
        style={[styles.addButton, btnDisable && styles.btnDisable]}
      >
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
    marginBottom: 20,
    borderColor: "red",
    borderWidth: 0.7,
    borderRadius: 20,
  },
  color: {
    fontSize: 16,
    fontWeight: "500",
  },
  radioBtn: {
    flexDirection: "row",
    paddingLeft: 15,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontWeight: "500",
    marginBottom: 10,
    color: colors.shadowGray,
  },
  amount: {
    flexDirection: "row",
    alignItems: "center",
  },
  stock: {
    paddingLeft: 10,
    fontSize: 18,
    color: colors.greenPrimary,
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: colors.lightGray,
  },
  addButton: {
    backgroundColor: colors.primaryBlue,
    width: "100%",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 205,
  },
  btnDisable: {
    backgroundColor: "grey",
  },
  addButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProductDetail;
