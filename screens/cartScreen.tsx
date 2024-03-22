import React, { useMemo } from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQty } from "../store/reducer/cardSliceReducer";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state?.cart) || [];

  const getTotalAmount = useMemo(() => {
    let total = 0;
    cartReducer?.cart.map(({ quantity, amount }) => {
      total += quantity * amount;
    });
    return total;
  }, [cartReducer?.cart]);

  return (
    <View>
      {cartReducer?.cart.map((item, index) => (
        <Pressable style={style.container}>
          <View>
            <Text style={style.itemName}>{item.name}</Text>
            <Image source={{ uri: item.mainImage }} style={style.imgStyle} />
          </View>

          <Pressable style={style.btn}>
            <Pressable
              onPress={() => {
                dispatch(decrementQty(item));
              }}
            >
              <Text style={[style.btnTxt, style.font_20]}>-</Text>
            </Pressable>

            <Pressable>
              <Text style={[style.btnTxt, style.font_15]}>{item.quantity}</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                dispatch(addToCart(item));
              }}
            >
              <Text style={[style.btnTxt, style.font_20]}>+</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      ))}
      <Text>{getTotalAmount}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FF3366",
    borderRadius: 5,
    width: 95,
  },
  btnTxt: {
    color: "white",
    paddingHorizontal: 10,
  },
  font_25: {
    fontSize: 25,
  },
  font_15: {
    fontSize: 15,
  },
  font_20: {
    fontSize: 20,
  },
});

export default CartScreen;
