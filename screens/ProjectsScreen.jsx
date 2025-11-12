import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function ProjectsScreen() {
  const openGithub = () => {
    Linking.openURL('https://github.com/jbkelli');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0f0f1a', '#0a0a0a']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>My Projects</Text>

          <Text style={styles.description}>
            Explore my coding journey through various projects that showcase my skills in web development, mobile app development, and software engineering. Each project represents a unique challenge and learning experience.
          </Text>

          <View style={styles.githubCard}>
            <View style={styles.iconContainer}>
              <Ionicons name="logo-github" size={70} color="#00ff88" />
            </View>

            <Text style={styles.cardTitle}>View My GitHub Repositories</Text>

            <Text style={styles.cardDescription}>
              Check out my complete collection of projects, open-source contributions, and code samples on GitHub. From web applications to mobile apps, you'll find diverse projects that demonstrate my technical abilities.
            </Text>

            <TouchableOpacity onPress={openGithub}>
              <LinearGradient
                colors={['#05c6bf', '#00ff88']}
                style={styles.button}
              >
                <Ionicons name="logo-github" size={22} color="#0a0a0a" />
                <Text style={styles.buttonText}>Visit My GitHub</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
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
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 40,
    textAlign: 'center',
  },
  githubCard: {
    backgroundColor: '#1a2a2a',
    borderRadius: 20,
    padding: 40,
    borderWidth: 2,
    borderColor: '#1a4d4a',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 15,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.85)',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0a0a0a',
    marginLeft: 10,
  },
});
