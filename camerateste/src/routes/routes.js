import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home/home";
import Casinha from "../pages/Inicio/inicio";

const Stack = createNativeStackNavigator()

export default function Rotas(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home"
            componente={Home}
            options={{headersShown:false}} />
            <Stack.Screen name="Casa"
            componente={Casinha}
            options={{headersShown:false}} />
        </Stack.Navigator>
    )
}