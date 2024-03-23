import { Alert } from "react-native";

type alert = {
  title: string;
  message: string;
  onPressFun?: void;
};

const DisplayAlert = ({ title, message, onPressFun }: alert) => {
  Alert.alert(title, message, [
    {
      text: "Cancel",
      onPress: () => {},
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => onPressFun(),
    },
  ]);
};

export default DisplayAlert;
