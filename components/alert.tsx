import { Alert } from "react-native";

type alert = {
  title: string;
  message: string;
  onPressFunction?: Function;
};

const DisplayAlert = ({ title, message, onPressFunction }: alert) => {
  Alert.alert(title, message, [
    {
      text: "Cancel",
      onPress: () => {},
      style: "cancel",
    },
    {
      text: "OK",
      onPress: () => onPressFunction(),
    },
  ]);
};

export default DisplayAlert;
