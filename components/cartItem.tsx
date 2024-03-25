import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../constants/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  addToCart,
  decrementQty,
  removeFromCart,
} from "../store/reducer/cardReducer";
import DisplayAlert from "./alert";
import { cardObjectType } from "../constants/types";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const { quantity, amount, mainImage, name, selectedSize, colour } = item;

  const deleteAlert = (item: cardObjectType) => {
    DisplayAlert({
      title: "Remove Product",
      message: "are you sure, you want to delete the product?",
      onPressFunction: () => dispatch(removeFromCart(item)),
    });
  };

  return (
    <View key={item.id} style={style.container}>
      <View>
        <Text style={style.itemName}>{name}</Text>
        <View style={style.quantity}>
          <Image source={{ uri: mainImage }} style={style.imgStyle} />
          <View>
            <Text style={style.quantityTxt}>£{quantity * amount}</Text>
            <Text style={style.size}>{`size: ${selectedSize}`}</Text>
            <Text
              style={[style.size, style.font_15]}
            >{`color: ${colour}`}</Text>
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

  quantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityTxt: {
    paddingLeft: 10,
    fontSize: 18,
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
  size: {
    paddingLeft: 10,
    fontSize: 18,
    marginTop: 5,
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

export default CartItem;
