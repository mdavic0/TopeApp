import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function DiscountCalculatorScreen() {
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const [finalPrice, setFinalPrice] = useState(null);
  const [savings, setSavings] = useState(null);

  const calculateDiscount = () => {
    const amt = parseFloat(amount);
    const disc = parseFloat(discount);
    const savings = amt * (disc / 100);
    const finalPrice = amt - savings;
    setFinalPrice(finalPrice);
    setSavings(savings);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount %"
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
      />
      <Button title="Calculate" onPress={calculateDiscount} />
      {finalPrice !== null && (
        <View>
          <Text>Final Price: {finalPrice.toFixed(2)}</Text>
          <Text>Savings: {savings.toFixed(2)}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
});
