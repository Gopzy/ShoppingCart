import React, { useMemo } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import colors from "../constants/colors";
import { cardObjectType, Reducers } from "../constants/types";
import CartItem from "../components/cartItem";

const CartScreen = () => {
  const cartReducer = useSelector((state: Reducers) => state?.cart) || [];

  const getTotalAmount = useMemo(() => {
    let total = 0;
    cartReducer?.cart.forEach(({ quantity, amount }) => {
      total += quantity * amount;
    });
    return total;
  }, [cartReducer?.cart]);

  const renderCartItem = (
    item,
    index: { item: cardObjectType; index: number }
  ) => <CartItem item={item} index={index} />;

  return (
    <ScrollView style={style.scrollContainer}>
      {cartReducer?.cart.map(renderCartItem)}

      {getTotalAmount > 0 ? (
        <View style={style.totalContainer}>
          <Text style={style.totalText}>Total Amount:</Text>
          <Text style={style.amountText}>{getTotalAmount}</Text>
        </View>
      ) : null}
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 5,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  totalContainer: {
    backgroundColor: colors.bgWhite,
    borderTopWidth: 2,
    borderTopColor: colors.borderGrey,
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  amountText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    paddingRight: 5,
  },
});

export default CartScreen;
