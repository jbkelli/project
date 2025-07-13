import { View, Text, StyleSheet } from 'react-native';

export default function HeaderBar() {
  return (
    <View style={styles.bar}>
      <Text style={styles.school}>📘 Chinga Boys High School</Text>
      <Text style={styles.user}>Logged in as JB Kamau</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#dff6ff',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  school: {
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  user: {
    color: '#34495e',
    fontStyle: 'italic',
  },
});
