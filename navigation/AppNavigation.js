import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import {getItem, setItem} from "../utils/async_storage";
const stack = createNativeStackNavigator();

export default function AppNavigation() {
const [isFirstLaunch, setIsFirstLaunch] = useState(null);

    useEffect(() => {
       checkIfFirstLaunch();
    }, []);


    const checkIfFirstLaunch = async () => {
        const onboarded = await getItem("alreadyLaunched");
        console.log("YA LOGUEO: ", onboarded);
        if (onboarded == 1) {
            setIsFirstLaunch(false);
        } else {
            setIsFirstLaunch(true);
        }
    };

    if (isFirstLaunch === null) {
        console.log("isFirstLaunch is null");
        return null;
    }

    if (isFirstLaunch) {
        return (
            console.log("isFirstLaunch is true"),
            <NavigationContainer>
                <stack.Navigator initialRoute = "Onboarding">
                    <stack.Screen name="Onboarding" options= {{headerShown: false}} component={OnboardingScreen} />
                    <stack.Screen name="Home" options= {{headerShown: false}} component={HomeScreen} />
                </stack.Navigator>
            </NavigationContainer>
        );
    } else {
        return(
        // console.log("isFirstLaunch is false");
        <NavigationContainer>
            <stack.Navigator initialRoute = "Home">
                <stack.Screen name="Onboarding" options= {{headerShown: false}} component={OnboardingScreen} />
                <stack.Screen name="Home" options= {{headerShown: false}} component={HomeScreen} />
            </stack.Navigator>
        </NavigationContainer>
        )
    }

    }