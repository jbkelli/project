import { View, Text, StyleSheet } from 'react-native';
import Profilecard from '../components/ProfileCard';
import Financialsummary from '../components/FinancialSummary';
import PaymentButton from '../components/PaymentButton';
import NavigationGrid from '../components/NavigationGrid';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      
      {/* School Banner */}
      <Text style={styles.schoolName}>Chinga Boys High School</Text>

      {/* Student Profile */}
      <Profilecard
        name="JB Kamau"
        regNo="CB0924"
        classLevel="Form 4 • Stream B"
        profileUri=""  // or local URI
      />

      <Financialsummary />
      <PaymentButton />
      <NavigationGrid />


    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#eef4ff' },
  schoolName: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#2c3e50' },
  profileCard: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  avatar: { width: 60, height: 60, borderRadius: 30, marginRight: 15 },
  name: { fontSize: 18, fontWeight: 'bold' },
  detail: { fontSize: 14, color: '#555' },
  summaryGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  summaryCard: { backgroundColor: '#fff', padding: 12, borderRadius: 8, width: '30%', elevation: 2 },
  summaryLabel: { fontSize: 13, color: '#666' },
  summaryValue: { fontSize: 16, fontWeight: 'bold', marginTop: 4 },
  paymentButton: { backgroundColor: '#e74c3c', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  paymentText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  navGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  navItem: { backgroundColor: '#dff6ff', padding: 14, borderRadius: 8, width: '48%', elevation: 1 },
  navLabel: { textAlign: 'center', fontSize: 14, fontWeight: '600', color: '#34495e' },
});