import React, { useMemo } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToCartSlice, decrementQty } from "../store/reducer/cardSlice";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartSlice = useSelector((state) => state?.cartSlice) || [];

  const getTotalAmount = useMemo(() => {
    let total = 0;
    cartSlice?.cart.map(({ quantity, amount }) => {
      total += quantity * amount;
    });
    return total;
  }, [cartSlice?.cart]);

  return (
    <View>
      {cartSlice?.cart.map((item, index) => (
        <Pressable
          style={{
            marginHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: "500", marginBottom: 10 }}>
              {item.name}
            </Text>
            <Image
              source={{ uri: item.mainImage }}
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
          </View>

          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FF3366",
              borderRadius: 5,
              width: 95,
            }}
          >
            <Pressable
              onPress={() => {
                dispatch(decrementQty(item));
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                -
              </Text>
            </Pressable>

            <Pressable>
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                {item.quantity}
              </Text>
            </Pressable>

            <Pressable
              onPress={() => {
                dispatch(addToCartSlice(item));
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  paddingHorizontal: 10,
                }}
              >
                +
              </Text>
            </Pressable>
          </Pressable>
        </Pressable>
      ))}
      <Text>{getTotalAmount}</Text>
    </View>
  );
};

export default CartScreen;
