import React, { useMemo } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQty,
  removeFromCart,
} from "../store/reducer/cardReducer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../constants/colors";
import DisplayAlert from "../components/alert";
import { Reducers } from "../constants/types";
import { cardObjectType } from "../components/Product";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartReducer = useSelector((state: Reducers) => state?.cart) || [];

  const getTotalAmount = useMemo(() => {
    let total = 0;
    cartReducer?.cart.forEach(({ quantity, amount }) => {
      total += quantity * amount;
    });
    return total;
  }, [cartReducer?.cart]);

  const deleteAlert = (item: cardObjectType) => {
    DisplayAlert({
      title: "Remove Product",
      message: "are you sure, you want to delete the product?",
      onPressFunction: () => dispatch(removeFromCart(item)),
    });
  };

  const renderCartItem = (
    item,
    index: { item: cardObjectType; index: number }
  ) => {
    const { quantity, amount, mainImage, name, selectedSize } = item;

    return (
      <View key={index} style={style.container}>
        <View>
          <Text style={style.itemName}>{name}</Text>
          <View style={style.quantity}>
            <Image source={{ uri: mainImage }} style={style.imgStyle} />
            <View>
              <Text style={style.quantityTxt}>£{quantity * amount}</Text>
              <Text style={{ paddingLeft: 10, fontSize: 18, marginTop: 10 }}>
                {`size: ${selectedSize}`}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Pressable style={style.btn}>
            {quantity !== 1 ? (
              <Pressable
                onPress={
                  quantity !== 1
                    ? () => {
                        dispatch(decrementQty(item));
                      }
                    : null
                }
              >
                <Text style={[style.btnTxt, style.font_20]}>-</Text>
              </Pressable>
            ) : null}

            <Pressable>
              <Text style={[style.btnTxt, style.font_15]}>{quantity}</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                dispatch(addToCart(item));
              }}
            >
              <Text style={[style.btnTxt, style.font_20]}>+</Text>
            </Pressable>
          </Pressable>
          <Pressable onPress={() => deleteAlert(item)} style={style.deleteBtn}>
            <Icon name="delete-outline" size={25} color={colors.iconRed} />
          </Pressable>
        </View>
      </View>
    );
  };

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
  container: {
    padding: 8,
    justifyContent: "space-between",
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.cartgreen,
    marginVertical: 5,
    borderRadius: 10,
  },
  scrollContainer: {
    paddingHorizontal: 5,
  },
  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityTxt: {
    paddingLeft: 10,
    fontSize: 18,
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

  deleteBtn: {
    flexDirection: "column",
    marginTop: 5,
    alignItems: "flex-end",
  },
  itemName: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
    maxWidth: 250,
  },
  imgStyle: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.fadedGreen,
    borderRadius: 5,
    width: 90,
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
