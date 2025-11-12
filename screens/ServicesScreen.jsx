import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function ServicesScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0f0f1a', '#0a0a0a']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>My Services</Text>

          <ServiceCard
            icon="code-slash"
            title="WEB DEVELOPMENT"
            description="I create web applications and websites fit for your requirements and easy to navigate for the users. The web apps and sites are created in detail following the guidelines and expectations you provide, the main goal being bringing your idea to life."
          />

          <ServiceCard
            icon="crop"
            title="FRONT-END DEVELOPMENT"
            description="Developing a User-interface for web applications targeted to be scalable, navigatable and enhance visual impact."
          />

          <ServiceCard
            icon="color-palette"
            title="WEB DESIGN"
            description="I craft innovative web applications that blend aesthetics with functionality, ensuring intuitive user experiences, scalability, and efficiency. Whether it's an interactive dashboard, an e-commerce platform, or a dynamic business tool, I turn concepts into reality."
          />

          <ServiceCard
            icon="phone-portrait"
            title="MOBILE APP DEVELOPMENT"
            description="Building cross-platform mobile applications using React Native, delivering native performance with efficient code sharing. From concept to deployment, I create engaging mobile experiences for both iOS and Android platforms."
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const ServiceCard = ({ icon, title, description }) => (
  <View style={styles.card}>
    <View style={styles.iconContainer}>
      <Ionicons name={icon} size={50} color="#00ff88" />
    </View>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
);

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
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#1a2a2a',
    borderRadius: 15,
    padding: 25,
    borderWidth: 1,
    borderColor: '#1a4d4a',
    marginBottom: 20,
  },
  iconContainer: {
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    letterSpacing: 1,
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(255, 255, 255, 0.85)',
  },
});
