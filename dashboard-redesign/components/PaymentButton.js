import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function PaymentButton() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setShowMenu(true)}>
        <FontAwesome name='bank' size={30} color="white" />
        <Text style={styles.text}>Make Payment</Text>
      </TouchableOpacity>

      <Modal visible={showMenu} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            <Text style={styles.menuTitle}>Select Payment Method</Text>

            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>📱 M-PESA</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>🏦 Bank Transfer</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setShowMenu(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 160,
    width: "50%",
    marginLeft: 180,
    flexDirection: "row",
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 20,
    borderRadius: 12,
    elevation: 4,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#2c3e50',
  },
  option: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  optionText: {
    fontSize: 16,
    color: '#34495e',
  },
  closeButton: {
    marginTop: 12,
    alignItems: 'center',
  },
  closeText: {
    fontSize: 14,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
});
