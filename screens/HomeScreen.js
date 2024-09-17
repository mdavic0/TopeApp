import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/async_storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const navigation = useNavigation();

    const handleReset = async () => {
        await removeItem('hasSeenOnboarding');
        navigation.push('Onboarding');
    }

    return (
        console.log("HomeScreen"),
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>Home</Text>
                    <TouchableOpacity style={styles.button} onPress={handleReset}>
                        <Text style={styles.label}>Reset Async Storage</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#45682',
    },
    text: {
        fontSize: 20,
        color: 'red',
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
    },
    label: {
        color: 'white',
        fontSize: 16,
    },
});

