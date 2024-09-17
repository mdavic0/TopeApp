import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { OnboardingProvider } from './context/OnboardingContext';  // Ajusta la ruta según tu estructura
import AppNavigation from './navigation/AppNavigation';  // Ajusta la ruta según tu estructura

export default function App() {
    return (
        <OnboardingProvider>
            <NavigationContainer>
              <AppNavigation />
            </NavigationContainer>
        </OnboardingProvider>
    );
}