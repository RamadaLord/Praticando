import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Rotas from "./src/routes/routes";
export default function App() {
 
  return (
    <NavigationContainer>
        <StatusBar
          backgroundColor="#000000"
          barStyle="ligth-content"
          translucent={true}
        />
        <Rotas/>
    </NavigationContainer>
  );
}
