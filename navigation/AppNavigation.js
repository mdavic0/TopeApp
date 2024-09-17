import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardingContext } from '../context/OnboardingContext';
import OnboardingScreen from '../screens/OnboardingScreen';
import HomeScreen from '../screens/HomeScreen';
import { View, ActivityIndicator, Image, StyleSheet, Dimensions } from 'react-native';
const {width, height} = Dimensions.get('window');

const Stack = createStackNavigator();

export default function MainNavigator() {
    const { hasSeenOnboarding } = useContext(OnboardingContext);

    if (hasSeenOnboarding === null) {
        console.log('Cargando estado de Onboarding... ( TODAVIA ES NULL)');
    
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image 
                    source={require('../assets/images/logo.png')} 
                    style={[styles.logo, { tintColor: '' }]}
                    resizeMode="contain"

                />
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

const styles = StyleSheet.create({
    logo: {
        width: width*0.9,
        height: width,
      },
});