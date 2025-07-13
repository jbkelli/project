import { View, Text, StyleSheet } from 'react-native';

const feeItems = [
  { term: 'Term 1', year: '2025', amount: 'KES 12,000', status: 'Paid' },
  { term: 'Term 2', year: '2025', amount: 'KES 13,000', status: 'Paid' },
  { term: 'Term 3', year: '2025', amount: 'KES 10,000', status: 'Unpaid' },
];

export default function FeesStatement() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Fees Statement</Text>
      {feeItems.map((item, index) => (
        <View key={index} style={styles.feeCard}>
          <Text style={styles.term}>{item.term} • {item.year}</Text>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={[styles.status, { color: item.status === 'Paid' ? '#27ae60' : '#c0392b' }]}>
            {item.status}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  feeCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  term: { fontSize: 14, color: '#555', marginBottom: 6 },
  amount: { fontSize: 16, fontWeight: 'bold' },
  status: { fontSize: 14, marginTop: 4 },
});
