import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons'

export default function Sidebar() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/favicon.png")} />
      <Text style={styles.title}>Chinga Boys</Text>

      <TouchableOpacity style={styles.link} onPress={() => router.push('/')}>
        <FontAwesome name="home" size={18} color="#ecf0f1" />
        <Text style={styles.label}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => router.push('/fees-statement')}>
        <FontAwesome name="money" size={18} color="#ecf0f1" />
        <Text style={styles.label}>Fees Statement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => router.push('/payment-receipts')}>
        <FontAwesome name="file-text" size={18} color="#ecf0f1" />
        <Text style={styles.label}>Payment Receipts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    backgroundColor: '#2c3e50',
    paddingTop: 40,
    paddingHorizontal: 12,
    height: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#ecf0f1',
    fontSize: 14,
    marginLeft: 8,
  },
});