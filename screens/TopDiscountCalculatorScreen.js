import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

export default function TopDiscountCalculatorScreen() {
  const [discount, setDiscount] = useState('');
  const [cap, setCap] = useState('');
  const [maxSpend, setMaxSpend] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [purchase, setPurchase] = useState('');
  const [remaining, setRemaining] = useState(null);

  const calculateMaxSpend = () => {
    const disc = parseFloat(discount);
    const capAmount = parseFloat(cap);
    const maxSpend = capAmount / (disc / 100);
    setMaxSpend(maxSpend);
    setRemaining(maxSpend);
  };

  const addPurchase = () => {
    const purchaseAmount = parseFloat(purchase);
    setPurchases([...purchases, purchaseAmount]);
    setRemaining(remaining - purchaseAmount);
    setPurchase('');
  };

  const saveDiscount = () => {
    // Aquí puedes implementar la lógica para guardar el descuento en SQLite
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Discount %"
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
      />
      <TextInput
        style={styles.input}
        placeholder="Cap Amount"
        keyboardType="numeric"
        value={cap}
        onChangeText={setCap}
      />
      <Button title="Calculate Max Spend" onPress={calculateMaxSpend} />
      {maxSpend !== null && (
        <View>
          <Text>Max Spend: {maxSpend.toFixed(2)}</Text>
          <Text>Remaining: {remaining.toFixed(2)}</Text>
          <TextInput
            style={styles.input}
            placeholder="Purchase Amount"
            keyboardType="numeric"
            value={purchase}
            onChangeText={setPurchase}
          />
          <Button title="Add Purchase" onPress={addPurchase} />
          <FlatList
            data={purchases}
            renderItem={({ item }) => <Text>{item.toFixed(2)}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Save Discount" onPress={saveDiscount} />
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
