import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function InterestsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0a0a0a', '#0f0f1a']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>My Interests</Text>

          <InterestCard
            icon="musical-notes"
            title="Music & Singing"
            description="I have a passion for music and love to sing. Music is my way of expressing creativity and emotions, and it helps me stay inspired in both my personal and professional life."
          />

          <InterestCard
            icon="film"
            title="Watching Anime"
            description="I enjoy watching anime as it combines great storytelling with amazing visual artistry. It's a great way to unwind and explore different cultures and perspectives."
          />

          <InterestCard
            icon="bicycle"
            title="Bike Riding"
            description="Cycling is one of my favorite activities for staying active and exploring new places. It's a perfect way to clear my mind and maintain a healthy lifestyle."
          />

          <InterestCard
            icon="leaf"
            title="Nature Walks"
            description="I love spending time in nature, taking peaceful walks, and appreciating the beauty of the outdoors. It helps me reconnect with myself and find inspiration."
          />
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const InterestCard = ({ icon, title, description }) => (
  <View style={styles.card}>
    <View style={styles.iconContainer}>
      <Ionicons name={icon} size={45} color="#00ff88" />
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
    padding: 30,
    borderWidth: 1,
    borderColor: '#1a4d4a',
    alignItems: 'center',
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
    letterSpacing: 0.5,
    textAlign: 'center',
  },
  cardDescription: {
    fontSize: 14,
    lineHeight: 22,
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
  },
});
