import { View, Text, StyleSheet } from 'react-native';

const payments = [
  { date: '5 Jul 2025', method: 'M-PESA', amount: 'KES 7,500' },
  { date: '22 Jun 2025', method: 'Bank Transfer', amount: 'KES 5,000' },
  { date: '3 Apr 2025', method: 'M-PESA', amount: 'KES 4,500' },
];

export default function PaymentReceipts() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Receipts</Text>
      {payments.map((item, index) => (
        <View key={index} style={styles.receiptCard}>
          <Text style={styles.amount}>{item.amount}</Text>
          <Text style={styles.method}>{item.method}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  receiptCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 12,
  },
  amount: { fontSize: 16, fontWeight: 'bold', color: '#2c3e50' },
  method: { fontSize: 14, color: '#555', marginTop: 6 },
  date: { fontSize: 13, color: '#999', marginTop: 4 },
});