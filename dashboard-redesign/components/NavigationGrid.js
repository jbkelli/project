import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function NavigationGrid() {
  const router = useRouter();

  return (
    <View style={styles.grid}>
      <TouchableOpacity style={styles.item} onPress={() => router.push('/fees-statement')}>
        <Text style={styles.label}>Fees Statement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={() => router.push('/payment-receipts')}>
        <Text style={styles.label}>Payment Receipts</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    backgroundColor: '#74d4faff',
    padding: 14,
    borderRadius: 8,
    width: '48%',
    elevation: 1,
  },
  label: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
    color: '#34495e',
  },
});