import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import {setItem, getItem} from '../utils/async_storage';
const {width, height} = Dimensions.get('window');
import { OnboardingContext } from '../context/OnboardingContext';

export default function OnboardingScreen() {
    const navigation = useNavigation();
    const { markOnboardingAsSeen } = useContext(OnboardingContext);

    const handleDone = () => {
        markOnboardingAsSeen();
        navigation.navigate('Home');
    }

    const doneButton = ({ ...props }) => (
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text style={{ fontSize: 16 }}>Finalizar</Text>
        </TouchableOpacity>
    );

    const skipButton = ({ ...props }) => (
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text style={{ fontSize: 16 }}>Omitir</Text>
        </TouchableOpacity>
    );

    const nextButton = ({ ...props }) => (
        <TouchableOpacity style={styles.doneButton} {...props}>
            <Text style={{ fontSize: 16 }}>Siguiente</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Onboarding
                containerStyles={{ paddingHorizontal: 15 }}
                bottomBarHighlight={false}
                DoneButtonComponent={doneButton}
                SkipButtonComponent={skipButton}
                NextButtonComponent={nextButton}
                onDone={handleDone}
                onSkip={handleDone}
                pages={[
                    {
                        backgroundColor: '#fff',

                        image: (
                            <View style={styles.lottieContainer}>
                                <Image 
                                    source={require('../assets/images/logo.png')} 
                                    style={[styles.logo, { tintColor: '' }]}
                                    resizeMode="contain"

                                />
                            </View>
                        ),
                        title: 'Bienvenido a TopeApp',
                        subtitle: 'Descubre una nueva forma de calcular y gestionar tus descuentos',
                        isDone: () => false,
                        next: () => sleep(1000),
                    },
                    {
                        // backgroundColor: '#a7f3d0',
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottieContainer}>
                                <LottieView 
                                    source={require('../assets/animations/discount.json')} 
                                    autoPlay 
                                    loop 
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: 'Calcula Descuentos Rápidamente',
                        subtitle: 'Ingresa el monto y el porcentaje para conocer tu ahorro al instante.',
                        isDone: () => false,
                        next: () => sleep(1000),
                    },
                    {
                        // backgroundColor: '#fef3c7',
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottieContainer}>
                                <LottieView 
                                    source={require('../assets/animations/discount_list.json')} 
                                    autoPlay 
                                    loop 
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: 'Maximiza tus Compras',
                        subtitle: 'Encuentra el monto máximo a gastar y administra tus compras para aprovechar al máximo los descuentos.',
                        isDone: () => false,
                        next: () => sleep(1000),
                    },
                    {
                        // backgroundColor: '#a78bfa',
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottieContainer}>
                                <LottieView 
                                    source={require('../assets/animations/history.json')} 
                                    autoPlay 
                                    loop 
                                    style={styles.lottie}
                                />
                            </View>
                        ),
                        title: 'Guarda y Consulta tus Descuentos',
                        subtitle: 'Almacena tus cálculos y accede a ellos en cualquier momento con etiquetas personalizadas',
                        isDone: () => true,
                        end: () => handleDone(),
                    },
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    lottieContainer: {
        width: width*0.9,
        height: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottie: {
        width: width*0.9,
        height: width,
    },
    logo: {
        width: width*0.9,
        height: width,
      },
      doneButton: {
        padding: 20
      }
});
