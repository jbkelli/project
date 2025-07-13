import { View, Text, StyleSheet } from 'react-native';

export default function FinancialSummary() {
  return (
    <View style={styles.grid}>
      <View style={styles.card}>
        <Text style={styles.label}>Total Billed</Text>
        <Text style={styles.value}>KES 35,000</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Total Paid</Text>
        <Text style={styles.value}>KES 28,500</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Balance</Text>
        <Text style={[styles.value, { color: '#c0392b' }]}>KES 6,500</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    width: '30%',
    elevation: 2,
  },
  label: { fontSize: 13, color: '#666' },
  value: { fontSize: 16, fontWeight: 'bold', marginTop: 4 },
});