import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
// Importar SQLite y la lógica para recuperar los descuentos guardados

export default function HistoryScreen() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Aquí puedes implementar la lógica para recuperar los descuentos de SQLite
    setHistory([
      // Datos de ejemplo
      { id: '1', label: 'Descuento BNA', date: '2023-06-01', discount: 20, cap: 500 },
      // Más datos...
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discount History</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <Text>{item.label}</Text>
            <Text>{item.date}</Text>
            <Text>{item.discount}% off, cap: {item.cap}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
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
  historyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
