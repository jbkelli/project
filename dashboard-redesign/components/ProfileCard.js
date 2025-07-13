import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

export default function ProfileCard({ name, regNo, classLevel}) {
  const [profileUri, setProfileUri] = useState(null);
  const pickImage = async() =>  {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if(!result.canceled){
      setProfileUri(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.card}>
      <Image
        source={profileUri ? { uri: profileUri } : require('../assets/images/icon.png')}
        style={styles.avatar}
      />
      <View>
        <TouchableOpacity onPress={pickImage}>
          <Text style={styles.changePhoto}>📷 Change Photo</Text>
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.detail}>Reg No: {regNo}</Text>
        <Text style={styles.detail}>{classLevel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  changePhoto: {
    textDecorationLine: 'underline',
  },
  card: {
  backgroundColor: '#fff',
  padding: 16,
  borderRadius: 12,
  elevation: 3,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  marginBottom: 30,
},

  avatar: { width: 140, height: 140, borderRadius: 30, marginRight: 15, marginBottom: 6 },
  name: { fontSize: 18, fontWeight: 'bold', marginTop: 8, },
  detail: { fontSize: 14, color: '#555', marginTop: 8, },
});
