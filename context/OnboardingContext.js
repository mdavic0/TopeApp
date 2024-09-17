// OnboardingContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
    const [hasSeenOnboarding, setHasSeenOnboarding] = useState(null); // Inicialmente null para manejar la carga inicial

    // Función para guardar que el usuario ha visto el Onboarding en AsyncStorage
    const markOnboardingAsSeen = async () => {
        try {
            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
            setHasSeenOnboarding(true);
            console.log('Onboarding marcado como visto');
        } catch (e) {
            console.log('Error guardando el estado de Onboarding:', e);
        }
    };

    // Función para verificar en AsyncStorage si el usuario ya ha visto el Onboarding
    const checkIfOnboardingSeen = async () => {
        try {
            const value = await AsyncStorage.getItem('hasSeenOnboarding');
            console.log('Valor de Onboarding:', value);
            if (value !== null) {
                setHasSeenOnboarding(true);
            } else {
                setHasSeenOnboarding(false);
            }
        } catch (e) {
            console.log('Error leyendo el estado de Onboarding:', e);
        }
    };

    // Efecto que se ejecuta al iniciar la aplicación para verificar el estado del Onboarding
    useEffect(() => {
        checkIfOnboardingSeen();
    }, []);

    return (
        <OnboardingContext.Provider value={{ hasSeenOnboarding, markOnboardingAsSeen }}>
            {children}
        </OnboardingContext.Provider>
    );
};
