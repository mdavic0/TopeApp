import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingContext } from '../context/OnboardingContext';  // Importa el contexto
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import { View, ActivityIndicator } from 'react-native';  // Para el spinner de carga

const Stack = createStackNavigator();

export default function MainNavigator() {
    const { hasSeenOnboarding } = useContext(OnboardingContext);

    // Mostrar un spinner mientras se carga el estado de AsyncStorage
    if (hasSeenOnboarding === null) {
        console.log('Cargando estado de Onboarding... ( TODAVIA ES NULL)');
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="red" />
            </View>
        );
    } else {
        console.log('hasSeenOnboarding:', hasSeenOnboarding);
    }

    return (
        <>
            {hasSeenOnboarding? (
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Onboarding" options= {{headerShown: false}} component={OnboardingScreen} />
                    <Stack.Screen name="Home" options= {{headerShown: false}} component={HomeScreen} />
                </Stack.Navigator>
            ) : (
                <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen name="Onboarding" options= {{headerShown: false}} component={OnboardingScreen} />
                <Stack.Screen name="Home" options= {{headerShown: false}} component={HomeScreen} />
            </Stack.Navigator>
            )}
        </>        
    );
}