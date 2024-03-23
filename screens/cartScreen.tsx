import React, { useMemo } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQty,
  removeFromCart,
} from "../store/reducer/cardReducer";
import Icon from "react-native-vector-icons/Feather";
import colors from "../constants/colors";
import DisplayAlert from "../components/alert";

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

  const deleteAlert = (item) => {
    DisplayAlert({
      title: "Remove Product",
      message: "are you sure, you want to delete the product?",
      onPressFun: () => dispatch(removeFromCart(item)),
    });
  };

  const renderCartItem = (item, index) => {
    return (
      <Pressable key={index} style={style.container}>
        <View>
          <Text style={style.itemName}>{item.name}</Text>
          <Image source={{ uri: item.mainImage }} style={style.imgStyle} />
        </View>
        <View>
          <Pressable style={style.btn}>
            {item.quantity !== 1 ? (
              <Pressable
                onPress={
                  item.quantity !== 1
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
          <Pressable onPress={() => deleteAlert(item)} style={style.deleteBtn}>
            <Icon name="delete" size={25} color="#900" />
          </Pressable>
        </View>
      </Pressable>
    );
  };

  return (
    <ScrollView style={style.scrollContainer}>
      {cartReducer?.cart.map(renderCartItem)}

      {getTotalAmount > 0 ? (
        <View style={style.totalContainer}>
          <View style={style.innerContainer}>
            <Text style={style.totalText}>Total Amount:</Text>
            <Text style={style.amountText}>{getTotalAmount}</Text>
          </View>
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
  totalContainer: {
    backgroundColor: "#fff",
    borderTopWidth: 1.5,
    borderTopColor: "#ccc",
    padding: 10,
  },
  scrollContainer: {
    paddingHorizontal: 5,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
