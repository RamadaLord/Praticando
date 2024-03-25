import { Text, View, SafeAreaView,StatusBar, Button, TouchableOpacity } from "react-native";
import { styles } from "../../Styles/homecamera.styles";
import { Camera, CameraType } from "expo-camera";
import { useState } from "react";

export default function Home() {

    const [type, setType] = useState(CameraType.back);
    const [permission, setPermission] = Camera.useCameraPermissions()
    
    if (!permission){
        return<View/>
    }

    if(!permission.granted){
        
        return (
          <SafeAreaView style={styles.container}>
            <StatusBar
              backgroundColor="#000000"
              barStyle="ligth-content"
              translucent={true}
            />
            <View>
              <Text>Home camera</Text>
              <Button onPress={requestPermission} title='Solicitar permissao' />
            </View>
      
          </SafeAreaView>
        );
    }

    function toogleCameraType(){
        setType(current=>( current ===CameraType.back ? CameraType.front : CameraType.back))
    }

    return(
        <View>
            <Camera>
                <View>
                    <StatusBar  backgroundColor='#000000' barStyle='light-content' translucent={false} />
                    <TouchableOpacity onPress={toogleCameraType} >
                        <Text>
                            Mudar Camera
                        </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    )

}
