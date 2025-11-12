import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Linking, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:444mwangialvinm@gmail.com?subject=${subject}&body=${body}`;
    
    Linking.openURL(mailtoUrl);
    
    Alert.alert('Success', 'Opening your email app...');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0a0a0a', '#0f0f1a', '#161620']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Contact Me</Text>

          <View style={styles.contactInfo}>
            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => openLink('mailto:444mwangialvinm@gmail.com')}
            >
              <Ionicons name="mail" size={24} color="#00ff88" />
              <Text style={styles.contactText}>444mwangialvinm@gmail.com</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => openLink('tel:+254797237149')}
            >
              <Ionicons name="call" size={24} color="#00ff88" />
              <Text style={styles.contactText}>+254797237149</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialIcons}>
            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openLink('https://instagram.com/vin_grinch')}
            >
              <Ionicons name="logo-instagram" size={28} color="#05c6bf" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openLink('https://wa.me/254797237149?text=Hi%20Alvin!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.')}
            >
              <Ionicons name="logo-whatsapp" size={28} color="#05c6bf" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openLink('mailto:444mwangialvinm@gmail.com')}
            >
              <Ionicons name="mail" size={28} color="#05c6bf" />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.socialIcon}
              onPress={() => openLink('https://www.linkedin.com/in/alvin-maina-280837368/')}
            >
              <Ionicons name="logo-linkedin" size={28} color="#05c6bf" />
            </TouchableOpacity>
          </View>

          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Your name"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              style={styles.input}
              placeholder="Your Email"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Your Message"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
              multiline
              numberOfLines={6}
              textAlignVertical="top"
              value={message}
              onChangeText={setMessage}
            />

            <TouchableOpacity onPress={handleSubmit}>
              <LinearGradient
                colors={['#05c6bf', '#00ff88']}
                style={styles.submitButton}
              >
                <Text style={styles.submitButtonText}>Send Message</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <Text style={styles.copyright}>
            Copyright © Alvin 2025 | Built with passion and code ✨
          </Text>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  gradient: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  contactInfo: {
    marginBottom: 30,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactText: {
    color: '#05c6bf',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  socialIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1a4d4a',
    borderRadius: 25,
    marginHorizontal: 7,
    backgroundColor: '#1a2a2a',
  },
  formContainer: {
    marginBottom: 30,
  },
  input: {
    backgroundColor: 'rgba(5, 198, 191, 0.05)',
    borderWidth: 2,
    borderColor: 'rgba(5, 198, 191, 0.3)',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    fontSize: 15,
    marginBottom: 15,
  },
  textArea: {
    height: 120,
    paddingTop: 15,
  },
  submitButton: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  submitButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0a0a0a',
    letterSpacing: 1,
  },
  copyright: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 13,
    letterSpacing: 1,
    marginTop: 20,
  },
});
