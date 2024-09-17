import { View, Text, StyleSheet, SafeAreaView, TouchableHighlight } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        console.log("HomeScreen"),
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.text}>Home</Text>
                    <TouchableHighlight onPress={() => navigation.navigate('Onboarding')}>
                        <Text>Go to Onboarding</Text>
                    </TouchableHighlight>
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
});

