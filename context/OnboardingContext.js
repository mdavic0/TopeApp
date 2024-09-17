import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const OnboardingContext = createContext();

export const OnboardingProvider = ({ children }) => {
    const [hasSeenOnboarding, setHasSeenOnboarding] = useState(null);

    const markOnboardingAsSeen = async () => {
        try {
            await AsyncStorage.setItem('hasSeenOnboarding', 'true');
            setHasSeenOnboarding(true);
            console.log('Onboarding marcado como visto');
        } catch (e) {
            console.log('Error guardando el estado de Onboarding:', e);
        }
    };

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

    useEffect(() => {
        checkIfOnboardingSeen();
    }, []);

    return (
        <OnboardingContext.Provider value={{ hasSeenOnboarding, markOnboardingAsSeen }}>
            {children}
        </OnboardingContext.Provider>
    );
};
