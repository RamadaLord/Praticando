import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./src/styles/styles";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Gerando QRCode</Text>
      {qrValor.lengh > 0 && <QRCode
      value={}
      />}
      <TextInput />
      <TouchableOpacity>
        <Text>Gerar QRCode</Text>
      </TouchableOpacity>
    </View>
  );
}
